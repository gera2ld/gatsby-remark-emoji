# @gera2ld/gatsby-remark-emoji

![NPM](https://img.shields.io/npm/v/@gera2ld/gatsby-remark-emoji.svg)
![License](https://img.shields.io/npm/l/@gera2ld/gatsby-remark-emoji.svg)
![Downloads](https://img.shields.io/npm/dt/@gera2ld/gatsby-remark-emoji.svg)

This is a plugin for gatsby-plugin-remark to replace `:emoji:` short names with UTF-8 emoji icons.

It utilizes [emoji-js](https://github.com/iamcal/js-emoji) under the hood. See <https://projects.iamcal.com/emoji-data/table.htm> for a catalog of emojis.

## Installation

```bash
$ npm i @gera2ld/gatsby-remark-emoji
```

## Usage

Add to `gatsby-config.js`:

```js
  plugins: [      
    '@gera2ld/gatsby-remark-emoji',
  ]

  // or

  plugins: [      
    {
      resolve: '@gera2ld/gatsby-remark-emoji',
      options, // see below
    },
  ]
```

## Options

Options will be assigned to `EmojiConvertor` instance, roughly the same as:

```js
const emoji = new EmojiConvertor();
Object.assign(emoji, pluginOptions);
```

See [emoji-js](https://github.com/iamcal/js-emoji) for more details.

The default options are:

```js
{
  replace_mode: 'unified',
}
```
