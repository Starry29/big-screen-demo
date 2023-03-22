rm -rf dist &&
yarn build --base ./ &&
cd dist &&
git init &&
git add . &&
git commit -m "deploy" &&
git branch -M main &&
git remote add origin git@github.com:kunccc/big-screen-website.git &&
git push -f -u origin main &&
cd ..