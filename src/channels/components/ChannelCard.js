import React from 'react'

import CardDecorator from '../../common/CardDecorator'

const ChannelCard = ({
  background,
  link,
  name,
  placeholder,
  thumbnail,
  title,
}) => {
  return (
    <CardDecorator
      avatar={thumbnail}
      cover={background}
      placeholder={placeholder}
      link={link}
      to={`/c/${name}`}
    >
      <div className="card-body">
        <h5 className="card-title text-truncate" title={title}>
          {title}
        </h5>

        <button className="btn btn-primary btn-block btn-sm font-weight-bold mt-4 mb-2">
          SEGUIR
        </button>

        <p className="text-muted small mb-0">
          Siguiendo este canal podrás ver sus publicaciones en tu página de
          inicio
        </p>
      </div>
    </CardDecorator>
  )
}

ChannelCard.defaultProps = {
  link: true,
}

export default ChannelCard
