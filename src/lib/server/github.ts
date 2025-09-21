import { github } from '$lib/server/config';

export interface GitHubUser {
	username: string;
	email: string;
}

export async function grantRepositoryAccess(githubUsername: string, customerEmail: string): Promise<boolean> {
	try {
		const response = await fetch(
			`https://api.github.com/repos/${github.repoOwner}/${github.repoName}/collaborators/${githubUsername}`,
			{
				method: 'PUT',
				headers: {
					Authorization: `Bearer ${github.token}`,
					Accept: 'application/vnd.github.v3+json',
					'X-GitHub-Api-Version': '2022-11-28'
				},
				body: JSON.stringify({
					permission: 'pull' // Read access only
				})
			}
		);

		if (!response.ok) {
			const errorData = await response.text();
			throw new Error(`GitHub API error: ${response.status} - ${errorData}`);
		}

		console.log(`Successfully granted GitHub access to ${githubUsername} (${customerEmail})`);
		return true;
	} catch (error) {
		console.error('Failed to grant GitHub access:', error);
		return false;
	}
}

export async function revokeRepositoryAccess(githubUsername: string): Promise<boolean> {
	try {
		const response = await fetch(
			`https://api.github.com/repos/${github.repoOwner}/${github.repoName}/collaborators/${githubUsername}`,
			{
				method: 'DELETE',
				headers: {
					Authorization: `Bearer ${github.token}`,
					Accept: 'application/vnd.github.v3+json',
					'X-GitHub-Api-Version': '2022-11-28'
				}
			}
		);

		if (!response.ok && response.status !== 404) {
			const errorData = await response.text();
			throw new Error(`GitHub API error: ${response.status} - ${errorData}`);
		}

		console.log(`Successfully revoked GitHub access for ${githubUsername}`);
		return true;
	} catch (error) {
		console.error('Failed to revoke GitHub access:', error);
		return false;
	}
}

export async function checkRepositoryAccess(githubUsername: string): Promise<boolean> {
	try {
		const response = await fetch(
			`https://api.github.com/repos/${github.repoOwner}/${github.repoName}/collaborators/${githubUsername}`,
			{
				method: 'GET',
				headers: {
					Authorization: `Bearer ${github.token}`,
					Accept: 'application/vnd.github.v3+json',
					'X-GitHub-Api-Version': '2022-11-28'
				}
			}
		);

		return response.ok;
	} catch (error) {
		console.error('Failed to check GitHub access:', error);
		return false;
	}
}

export function getRepositoryUrl(): string {
	return `https://github.com/${github.repoOwner}/${github.repoName}`;
}

export async function getUserInfo(githubUsername: string): Promise<GitHubUser | null> {
	try {
		const response = await fetch(`https://api.github.com/users/${githubUsername}`, {
			headers: {
				Authorization: `Bearer ${github.token}`,
				Accept: 'application/vnd.github.v3+json',
				'X-GitHub-Api-Version': '2022-11-28'
			}
		});

		if (!response.ok) {
			return null;
		}

		const userData = await response.json();
		return {
			username: userData.login,
			email: userData.email || ''
		};
	} catch (error) {
		console.error('Failed to get GitHub user info:', error);
		return null;
	}
}