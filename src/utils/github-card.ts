const numberFormatter = new Intl.NumberFormat("en-us", {
    notation: "compact",
    maximumFractionDigits: 1,
});

function setText(parent: Element, selector: string, text: string) {
    const element = parent.querySelector<HTMLElement>(selector);
    if (element) element.innerText = text;
}

function finishCard(card: HTMLElement) {
    card.classList.remove("fetch-waiting");
    card.dataset.githubCardLoaded = "true";
}

async function loadGithubCard(card: HTMLElement) {
    const repo = card.dataset.repo || card.getAttribute("repo");
    if (!repo || card.dataset.githubCardLoading === "true") return;

    card.dataset.githubCardLoading = "true";

    try {
        const response = await fetch(`https://api.github.com/repos/${repo}`, {
            referrerPolicy: "no-referrer",
        });

        if (!response.ok) {
            throw new Error(`GitHub API returned ${response.status}`);
        }

        const data = await response.json();
        setText(
            card,
            ".gc-description",
            data.description?.replace(/:[a-zA-Z0-9_]+:/g, "") || "Description not set",
        );
        setText(card, ".gc-language", data.language || "");
        setText(card, ".gc-forks", numberFormatter.format(data.forks ?? 0).replaceAll("\u202f", ""));
        setText(
            card,
            ".gc-stars",
            numberFormatter.format(data.stargazers_count ?? 0).replaceAll("\u202f", ""),
        );
        setText(card, ".gc-license", data.license?.spdx_id || "no-license");

        const avatar = card.querySelector<HTMLElement>(".gc-avatar");
        if (avatar && data.owner?.avatar_url) {
            avatar.style.backgroundImage = `url(${data.owner.avatar_url})`;
            avatar.style.backgroundColor = "transparent";
        }
    } catch {
        card.classList.add("fetch-error");
        setText(card, ".gc-description", "Unable to load GitHub repository data");
        setText(card, ".gc-language", "");
        setText(card, ".gc-forks", "0");
        setText(card, ".gc-stars", "0");
        setText(card, ".gc-license", "unknown");
    } finally {
        delete card.dataset.githubCardLoading;
        finishCard(card);
    }
}

export function initGithubCards() {
    const cards = Array.from(
        document.querySelectorAll<HTMLElement>(
            ".card-github.fetch-waiting:not([data-github-card-loaded])",
        ),
    );

    if (cards.length === 0) return;

    if (!("IntersectionObserver" in window)) {
        cards.forEach(card => loadGithubCard(card));
        return;
    }

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                const card = entry.target as HTMLElement;
                observer.unobserve(card);
                loadGithubCard(card);
            });
        },
        { rootMargin: "100px" },
    );

    cards.forEach(card => observer.observe(card));
}
