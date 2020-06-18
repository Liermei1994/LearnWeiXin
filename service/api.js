import {base} from "../service/base"
export const getIndexDatas = params=>{
  return base('/home/multidata','get',params)
}