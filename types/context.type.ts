import {OakContext} from '../deps.ts'
import type {post} from './post.type.ts'


export class Context extends OakContext {
  body?: any
  postSlug?: string;
  post?: post
}
