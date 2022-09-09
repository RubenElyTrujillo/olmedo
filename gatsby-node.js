const fs = require("fs")
const path = require("path")
const i18next = require("i18next")
const nodeFsBackend = require("i18next-node-fs-backend")

const allLanguages = ["es", "en"]

const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)
const srcPath = resolveApp("src")

exports.createPages = async ({ actions: { createPage, createRedirect } }) => {
  const indexTemplate = path.resolve(`src/templates/Index.js`)
  await buildI18nPages(
    null,
    (_, language) => ({
      path: `/${language}`,
      component: indexTemplate,
      context: {},
    }),
    ["common"],
    createPage
  )

  const privacyTemplate = path.resolve(`src/templates/Privacy.js`)
  await buildI18nPages(
    null,
    (_, language) => ({
      path: `/${language}/privacy-policy`,
      component: privacyTemplate,
      context: {},
    }),
    ["common"],
    createPage
    )

  const successTemplate = path.resolve(`src/templates/Success.js`)
  await buildI18nPages(
    null,
    (_, language) => ({
      path: `/${language}/success`,
      component: successTemplate,
      context: {},
    }),
    ["common", "success"],
    createPage
  )
  await build404Pages(createPage)

  createRedirect({ fromPath: "/", toPath: "/es", isPermanent: true })

  allLanguages.forEach(language =>
    createRedirect({
      fromPath: `/${language}/*`,
      toPath: `/${language}/404`,
      statusCode: 404,
    })
  )
  createRedirect({ fromPath: "/*", toPath: "/404", statusCode: 404 })
}

const buildI18nPages = async (
  inputData,
  pageDefinitionCallback,
  namespaces,
  createPage
) => {
  if (!Array.isArray(inputData)) inputData = [inputData]
  await Promise.all(
    inputData.map(async ipt => {
      const definitions = await Promise.all(
        allLanguages.map(async language => {
          const i18n = await createI18nextInstance(language, namespaces)
          const res = pageDefinitionCallback(ipt, language, i18n)
          res.context.language = language
          res.context.i18nResources = i18n.services.resourceStore.data
          return res
        })
      )

      const alternateLinks = definitions.map(d => ({
        language: d.context.language,
        path: d.path,
      }))

      definitions.forEach(d => {
        d.context.alternateLinks = alternateLinks
        createPage(d)
      })
    })
  )
}

const createI18nextInstance = async (language, namespaces) => {
  const i18n = i18next.createInstance()
  i18n.use(nodeFsBackend)
  await new Promise(resolve =>
    i18n.init(
      {
        lng: language,
        ns: namespaces,
        fallbackLng: language,
        interpolation: { escapeValue: false },
        backend: { loadPath: `${srcPath}/locales/{{lng}}/{{ns}}.json` },
      },
      resolve
    )
  )
  return i18n
}

const build404Pages = async createPage => {
  const errorTemplate = path.resolve(`src/templates/404.js`)
  await Promise.all(
    allLanguages.map(async (language, index) => {
      const i18n = await createI18nextInstance(language, ["common", 404])
      const res = {
        path: `/${language}/404`,
        component: errorTemplate,
        context: {},
      }
      res.context.language = language
      res.context.i18nResources = i18n.services.resourceStore.data
      createPage(res)
      if (index === 0) {
        res.path = "/404"
        createPage(res)
      }
    })
  )
}

exports.createResolvers = ({ createResolvers }) => {
  createResolvers({
    SanityLocaleString: {
      translate: {
        type: `String!`,
        args: { language: { type: "String" } },
        resolve: (source, args) => {
          return source[args.language] || source["en"]
        },
      },
    },
  })
}