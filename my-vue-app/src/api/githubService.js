import githubClient from './axiosConfig';

export const githubService = {
  async getUserRepos(username) {
    const { data } = await githubClient.get(`/users/${username}/repos`);
    return data;
  },
  
  async getRepoDetails(owner, repo) {
    const { data } = await githubClient.get(`/repos/${owner}/${repo}`);
    return data;
  }
};