Built following this guide: https://blog.openreplay.com/creating-a-markdown-powered-nextjs-blog-in-under-an-hour/. Upgrade to using App Route.

## TODO
### Known Bugs
- [ ] Pic does not resize (might need some external lib)
- [x] <Link href="/"> routes to '.txt' after deployment 
    
    -- this seems to be a nextjs 13.3 [issue](https://github.com/vercel/next.js/issues/48996#issuecomment-1532693355). 
    
    Getting rid of 'export': true would do (it actually went well when deploying with Vercel), but that way GitHub Action would fail...

- [ ] can't get rid of getStaticPaths()

### New Feature
- [ ] Add About Page
- [ ] Add sorting by tag / date
- [ ] Syntax highlighting
