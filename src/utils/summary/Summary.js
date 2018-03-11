class Summary {
  getFirstSummaryImage() {
    const images = this.summary.summary.images
    return images && images.amount > 0 && images.slice.length > 0
      ? images.slice[0]
      : null
  }

  getFirstLinkImage() {
    const link = this.summary.summary.link
    return link ? link.images[0] : null
  }

  getChannelName() {
    return this.summary.channel.channelType === 'user_feed'
      ? null
      : this.summary.channel.name
  }

  getExcerpt() {
    return this.summary.summary.excerpt
  }

  getChannelTitle() {
    return this.summary.channel.title
  }

  getComments() {
    return this.summary.comments.humanize()
  }

  getCreated() {
    return this.summary.created
  }

  getIcon() {
    return 'fa fa-question'
  }

  getId() {
    return this.summary.id
  }

  getOwner() {
    return this.summary.owner.username
  }

  getPreview() {
    return null
  }

  getScore() {
    return (this.summary.upvotes - this.summary.downvotes).humanize()
  }

  getShares() {
    return this.summary.shares.humanize()
  }

  getSlug() {
    return this.summary.slug
  }

  getThumbnail() {
    return this.getFirstSummaryImage()
  }

  getTitle() {
    return this.summary.title
  }

  exec(summary) {
    this.summary = summary
    return this.build()
  }

  scaleThumbnail() {
    const image = this.getThumbnail()

    if (image) {
      const { height, url, width } = image

      return url.thumbnail(width, height)
    }

    return null
  }

  build() {
    return {
      channelName: this.getChannelName(),
      channelTitle: this.getChannelTitle(),
      comments: this.getComments(),
      created: this.getCreated(),
      icon: this.getIcon(),
      id: this.getId(),
      owner: this.getOwner(),
      preview: this.getPreview(),
      score: this.getScore(),
      shares: this.getShares(),
      slug: this.getSlug(),
      thumbnail: this.scaleThumbnail(),
      title: this.getTitle(),
    }
  }
}

export default Summary
