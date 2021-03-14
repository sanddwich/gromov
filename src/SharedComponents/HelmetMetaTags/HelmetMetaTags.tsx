import React from 'react'
import { Helmet } from 'react-helmet'

interface HelmetMetaTagsProps {}

interface HelmetMetaTagsState {}

class HelmetMetaTags extends React.Component<HelmetMetaTagsProps, HelmetMetaTagsState> {
  render() {
    return (
      <Helmet>
        <meta charSet="utf-8" />
        <title>Виктор Громов</title>
        <meta name="description" content="Онлайн фитнес тренер Виктор Громов" />
        <meta
          name="keywords"
          content="программа тренировок, программа питания, онлайн диетолог, как похудеть, как набрать вес, фитнес тренер москва, фитнес центр"
        />
        <meta name="robots" content="all" />
        <meta name="author" content="DeeDesign" />
      </Helmet>
    )
  }
}

export default HelmetMetaTags
