export type NewsStateType = {
  latestNews: SingleNewsType[],
  popularNews: SingleNewsType[],
}

export type SingleNewsType = {
  created_at: string
  title: string
  url: string
  author?: string
  points?: number
  story_text?: string | null
  comment_text?: string | null
  num_comments?: number
  story_id?: string | number | null
  story_title?: string | null
  story_url?: string | null
  parent_id?: string | number | null
  created_at_i?: number
  relevancy_score?: number
  _tags?: string[]
  objectID?: string
  _highlightResult?: {
    title?: {
      value?: string,
      matchLevel?: string | null
      matchedWords?: any[]
    },
    url?: {
      value?: string
      matchLevel?: string | null
      matchedWords?: any[]
    },
    author?: {
      value?: string
      matchLevel?: string | null
      matchedWords?: any[]
    }
  }
}

export type ErrorsStateType = {
  latestNewsError: string
  popularNewsError: string
}
