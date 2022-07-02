import request from "@/utils/request";
export default {
  findByDictCode(dictCode) {
    return request({
      url: `/admin/cmn/dict/findByDictCode/${dictCode}`,
      method: "get",
    });
  },
};
