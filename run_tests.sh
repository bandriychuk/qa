#cucumber tag

tag=$1

#run cucumber tests & on failure run postcucumber
pnpm run cucumber --profile $tag || pnpm run postcucumber