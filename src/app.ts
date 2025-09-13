import express from 'express'
import { envs } from './config';
import { GitHubController } from './presentation/github/controller';
import { GitHubService } from './presentation/services/github.service';
import { GithubSha256Middleware } from './presentation/middlewares/github-sha256.middleware';

(() => {
    main()
})();


function main() {

    const app = express();

    const controller = new GitHubController(new GitHubService());

    app.use(express.json());
    app.use(GithubSha256Middleware.verifyGithubSignature);

    app.post('/api/github', controller.webhookHandler);

    app.listen(envs.PORT, () => {

        // console.log(`App running on port ${envs.PORT}`);
    });

}