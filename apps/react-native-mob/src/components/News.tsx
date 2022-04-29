/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import {StyleSheet, Text} from 'react-native'

import {SingleNewsType} from '@4-mono-all/types'


type PropsType = {
  news?: SingleNewsType[]
  error?: string
  title?: string
}

export const News: React.FC<PropsType> =  ({news, error, title}) => {
  if (!news || news.length === 0) {
    return error ? <Text>{error}</Text> : null
  }

  return (
    <div>
      <Text>{`${title}:`}</Text>
      <ul style = {styles.newsList}>
        {news.map(({objectID, url, title, points, num_comments, created_at, author}) => (
          <li
            key = {objectID}
            className = 'news'
          >
            <Text style = {styles.description}>

              eisteddfod
              {/*<a*/}
              {/*  href = {url}*/}
              {/*  className = 'news-title'*/}
              {/*>*/}
              {/*  {title || 'No title'}*/}
              {/*</a>*/}
              {/*<span className = 'text'>{`${points || 0} points`}</span>*/}
              {/*<span className = 'comments'>{`${num_comments || 0} comments`}</span>*/}
              {/*<span className = 'date'>{new Date(created_at).toLocaleDateString()}</span>*/}
              {/*<span className = 'author'>{author || 'no author'}</span>*/}
            </Text>
          </li>
        ))}
      </ul>
    </div>
  )
}


const styles = StyleSheet.create({
  newsList: {
    display: 'flex',
    backgroundColor: '#e04377',
  },
  description: {
    display: 'flex',
    backgroundColor: '#e0d343',
  },
})
