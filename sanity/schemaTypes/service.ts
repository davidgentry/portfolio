import { defineField, defineType } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      description: 'Used for service cards and previews',
      validation: (Rule) => Rule.max(200),
    }),

    defineField({
      name: 'icon',
      title: 'Icon / Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Optional icon or image for the service card',
    }),

    defineField({
      name: 'content',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Detailed content for the individual service page',
    }),

    defineField({
      name: 'price',
      title: 'Price / Starting At',
      type: 'string',
      description: 'e.g. "Starting at $2,500" or "Custom pricing"',
    }),

    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),

    defineField({
      name: 'featured',
      title: 'Featured Service',
      type: 'boolean',
      initialValue: false,
      description: 'Show this service prominently',
    }),
  ],
})