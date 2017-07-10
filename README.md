# Fatherline frontend

This is the repository for the frontend website of fatherline.com

## Deployment

The frontend is distributed as a private Docker image
The image is built using CircleCI on every push to the target/prod branch
You can see the status of the build if you sign in to circleci.com using GitHub

Once the build has finished successfully you need to:
SSH into the server
cd fatherline-deploy
docker-compose pull frontend
docker-compose up -d frontend


