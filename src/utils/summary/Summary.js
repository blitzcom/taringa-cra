class Summary {
  getChannelName() {
    return this.summary.channel.channelType === 'user_feed'
      ? null
      : this.summary.channel.name
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

  getPreviewKind() {
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
    return this.summary.summary.images.amount > 0
      ? this.summary.summary.images.slice[0]
      : null
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
      previewKind: this.getPreviewKind(),
      score: this.getScore(),
      shares: this.getShares(),
      slug: this.getSlug(),
      thumbnail: this.scaleThumbnail(),
      title: this.getTitle(),
    }
  }
}

export default Summary
