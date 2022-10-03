// import coverImage from './coverImage'

const post = {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'excerpt',
      title: 'Excerpt',
      description: 'The excerpt is used in blog feeds, and also for search results',
      type: 'string',

      validation: (Rule: {max: (arg0: number) => any}) => Rule.max(200),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'coverImage',
      title: 'Cover Image',
      type: 'coverImage',
    },

    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'reference', to: {type: 'tag'}}],
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'markdown',
    },
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'coverImage',
    },
    prepare(selection: any) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}

export default post
