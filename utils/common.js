
import common from "./request"

// 上传图片
export const uploadImg = () => {
    return new Promise((resolve, reject) => {
        uni.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success: (res) => {
                resolve(res)
            }
        })
    })
}

// 上传文件
export const uploadFile = (filePath) => {
    return new Promise((resolve, reject) => {
        uni.uploadFile({
            url: common.baseUrl + '/goods/uploadPictureFile',
            filePath: filePath,
            name: 'file',
            headers: {
                'Content-Type': 'multipart/form-data' //********划重点
            },
            success: (data) => {
                if(JSON.parse(data.data).code == 200) {
                    resolve(JSON.parse(data.data).data)
                } else {
                    reject(data)
                }
               
            },
            fail: (err) => { reject(err) }
        })
    })
}






