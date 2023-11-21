/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxe26a82d157d660a2',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: 'dbe64723d86b63d403e27ca1fee503a6',

  PROVINCE: '广东',
  CITY: '东莞',

  USERS: [
    {
      // 想要发送的人的名字
      name: '珣珣',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oi9ZL61KG9hXOpor2Baqruc4Z13k',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'rBk0FVjFamZ36pfYA00X3fWcgjlS7Tfqge5Kx8eLk2o',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: 'xun', year: '1992', date: '05-09',
        },
        {
          type: '节日', name: '结婚纪念日', year: '2023', date: '10-28',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-05-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-10-28' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '-42_aPFE6Xgf7ixp-VfeEznQ2oZygM6l0GB2RAkQeFc',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oi9ZL61KG9hXOpor2Baqruc4Z13k',
    }
  ],

}

module.exports = USER_CONFIG

