+++
title = "News Update on Lazyvim 14.0.0"
date = "2024-12-17T10:16:04+05:30"
#dateFormat = "2006-01-02" # This value can be configured for per-post date formatting
author = "Harsh Vyapari"
authorTwitter = "harshv5094" #do not include @
cover = ""
tags = ["nvim", "lazyvim"]
keywords = ["nvim", "folke", "harshv5094", "lazyvim"]
description = "This post is about the latest changes in lazyvim version 14.0.0"
showFullContent = false
readingTime = true
hideComments = false
+++

So, yesterday, [folke](https://github.com/folke) release its new version of [LazyVim](https://lazyvim.org), version `14.0.0`,
for which, I'm exited about since my [nvim](https://github.com/harshv5094/.dotfiles/tree/main/.config/nvim) setup is based on `LazyVim`.

For those who don't know anything about `LazyVim`, here is a quick intro.
`LazyVim`, is a neovim distribution (like NvChad, AstroVim, etc..), which purely focuses on fast and productivity neovim setup, without much tweaking with your neovim config.

It is created by the one and only [folke](https://github.com/folke) (you know him from projects like `lazy.nvim`, `tokyonight.nvim`), also known as tpope of neovim.

So, we are going to talk about some major changes, why I think it will help improve LazyVim ecosystem. For more info visit <https://lazyvim.org/news>

>[!NOTE]
> This article is focused on the beginner level perspective of using `neovim`.

## Removing `telescope.nvim` in favor of `fzf-lua`

So, [telescope.nvim](https://github.com/nvim-telescope/telescope.nvim) is a plugin created by [TJ Devris](https://github.com/tjdevries) in the early days of neovim, this changed the concept of project navigation by integrating itself with [fzf](https://github.com/junegunn/fzf) to fuzzy find files with just few keystrokes.

I think, the majority of people joining neovim is possible because of this plugin. But there is an issue in this plugin I've addressed below:

1. In case of beginner, you need to read an entire document carefully to properly configure this plugin to your liking.

2. For other features (ex. File Browser). You need to install additional plugins (such as [telescope-file-browser](https://github.com/nvim-telescope/telescope-file-browser.nvim))

So, in short `telescope.nvim` is a great plugin, if you invest some time in it. But there are some developers, that just want a working text editor from start without too much tweaking their setup files. For this reason, I think folke choose `fzf-lua` as its default navigation file.

I think shifting to [fzf-lua](https://github.com/ibhagwan/fzf-lua) is justified, in case of a beginner to quickly configure their setup, since `fzf-lua` comes with sane defaults which allows user to quickly configure their setup, without writing too much in their setup. Here is a short code example:

```lua
return {
  {
    "ibhagwan/fzf-lua",
    cmd= "FzfLua"
    keys = {
      "ch",
      "<cmd>FzfLua files<cr>",
      { desc = "Find Files"}
    }
  }
}

```

You can see that it is very easy to add a feature just using 2 commands, instead of spending hours in configuring `telescope`.

## Removing `nvim-cmp` in favor of `blink.cmp`

Using, [blink.cmp](https://github.com/saghen/blink.cmp) to replace [nvim-cmp](https://github.com/hrsh7th/nvim-cmp) is same as I mentioned in above point. `nvim-cmp` needs multiple plugins to support code preview. Since, It's documentation is lacking to explain how to use his plugin, it is very difficult to configure.

`blink.cmp` works out of the box for user without needing much configuration. The documentation has proper comments for beginner to understand which option do what, which `nvim-cmp` is clearly lacking.

Note that, `blink.cmp` is still in beta stages so, it can sometime break on updates. I'm using `blink.cmp` since yesterday, and I didn't encounter any breakage during the usage. So we can safely say that folke made the correct choice to shift to `blink.cmp`.

This also help folke to reduce default config `LazyVim` plugin count to 34. A major milestone to consider in `LazyVim` development.

## Some updates on `snacks.nvim`

[snacks.nvim](https://github.com/folke/snacks.nvim) is a collection of small QoL (Quality of Life) plugins created by folke.

This plugin has become a major foundation for `LazyVim` since `v13.0.0`. Because it provides basic configuration for developers, without adding new plugins. This makes configuring neovim much more easy than before.

The major change in `LazyVim` regarding `snacks.nvim` is to completely shift `LazyVim` animation to snacks animation library, eliminating the need of [mini.animate](https://github.com/echasnovski/mini.animate).

This also provide a single `vim.g.snacks_animate = true | false` toggle for you to toggle your animation. You can read the lazyvim news page for more info on this topic.

## Conclusion

After considering the mindset of folke, I think this changes is better for newbies to configure their setup with few lines as possible (which is also known as `convention over configuration`).

It also allows experienced developers to work on what matters to them by letting someone else take care of this problem.

## Summary

- Added `fzf-lua`, which replaces `telescope.nvim`.
- Added `bink.cmp`, which replaces `nvim-cmp`.
- Shifted animation to `snacks.nvim`.
