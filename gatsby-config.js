module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    header: {
      bg: '#0082C3',
      btn: {
        btnFontSize: 1,
        btnText: '예약하기',
        btnColor: 'white',
        btnBg: '#ea9a4c',
      },
    },
    hero: {
      title: {
        titleText: 'RUN.\nFLY.\nLOOK.\nFEEL.',
        titleSizes: ['7em'],
        titleColor: 'white',
        titleBold: 'bold',
        titlePb: [10],
      },
      description: {
        descriptionText:
          '하늘에서 인터라켄을 본적 있으신가요?\n아이거, 융프라우의 장엄한 풍경을 감상해보세요.\n맑은 수정 같은 호수의 경치를 하늘에서 보는 감동.\n당신의 상상이 이뤄집니다!',
        descriptionSizes: [2, 2, 3, 3],
        descriptionColor: 'white',
        descriptionBold: 'thin',
      },
    },
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
}
