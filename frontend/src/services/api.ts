// In Docker: nginx proxies /api to backend, so we use relative URLs (empty string)
// In local dev: VITE_API_URL points directly to backend server
// Guard: if value is set but missing protocol (e.g. "makhijaquantumai.com"),
// prefix https:// to prevent it being treated as a relative path by the browser.
function normalizeApiUrl(url: string | undefined): string {
    if (!url) return '';
    // Already has a protocol — use as-is
    if (url.startsWith('http://') || url.startsWith('https://')) return url;
    // No protocol — add https://
    console.warn(`[api] VITE_API_URL "${url}" is missing protocol. Prepending https://`);
    return `https://${url}`;
}
const API_URL = normalizeApiUrl(import.meta.env.VITE_API_URL);

interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

interface Product {
    id: string;
    name: string;
    tagline: string;
    description: string;
    features: string[];
    icon: string;
    status: 'Live' | 'Beta' | 'Coming Soon';
    link?: string;
}

interface InsightPost {
    id: string;
    title: string;
    excerpt: string;
    content?: string;
    date: string;
    category: string;
    readTime: string;
    author: string;
}

async function handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
        const error = await response.json().catch(() => ({ error: 'Request failed' }));
        throw new Error(error.error || 'Request failed');
    }
    return response.json();
}

export const api = {
    contact: {
        submit: async (data: ContactFormData): Promise<{ success: boolean; id: string }> => {
            const response = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            return handleResponse(response);
        },
    },

    products: {
        getAll: async (): Promise<Product[]> => {
            const response = await fetch(`${API_URL}/api/products`);
            return handleResponse(response);
        },
        getById: async (id: string): Promise<Product> => {
            const response = await fetch(`${API_URL}/api/products/${id}`);
            return handleResponse(response);
        },
    },

    insights: {
        getAll: async (): Promise<InsightPost[]> => {
            const response = await fetch(`${API_URL}/api/insights`);
            return handleResponse(response);
        },
        getById: async (id: string): Promise<InsightPost> => {
            const response = await fetch(`${API_URL}/api/insights/${id}`);
            return handleResponse(response);
        },
    },
};

export type { ContactFormData, Product, InsightPost };
