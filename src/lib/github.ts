import axios from 'axios';

export async function getRepoStars(owner: string, repo: string): Promise<number> {
    try {
        const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}`);
        const { stargazers_count } = response.data;
        return stargazers_count;
    } catch (error) {
        console.error('Error fetching repository information:', error);
        return -1;
    }
}

export async function getRepoForks(owner: string, repo: string): Promise<number> {
    try {
        const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}`);
        const { forks_count } = response.data;
        return forks_count;
    } catch (error) {
        console.error('Error fetching repository forks:', error);
        return -1;
    }
}

export async function getRepoReleases(owner: string, repo: string): Promise<any[]> {
    try {
        const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/releases`);
        return response.data;
    } catch (error) {
        console.error('Error fetching repository releases:', error);
        return [];
    }
}