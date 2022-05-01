export interface IMovie {
  name: string;
  'poster-image': string;
}

export interface IPage {
  title: string;
  'total-content-items': string;
  'page-num-requested': string;
  'page-size-requested': string;
  'page-size-returned': string;
  'content-items': {
    content: IMovie[];
  };
}
