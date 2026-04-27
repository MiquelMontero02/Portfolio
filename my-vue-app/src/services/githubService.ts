import githubClient from './axiosConfig';
import type { Repository, RepositoryDetail } from '../types/github';

export const githubService = {
  async getUserRepos(username: string): Promise<Repository[]> {
    const { data } = await githubClient.get<Repository[]>(`/users/${username}/repos`);
    return data;
  },
  
  async getRepoDetails(owner: string, repo: string): Promise<RepositoryDetail> {
    const { data } = await githubClient.get<RepositoryDetail>(`/repos/${owner}/${repo}`);
    return data;
  }
};