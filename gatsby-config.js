module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    header: {
      bg: '',
      btn: {
        btnText: '예약하기',
        btnColor: 'white',
        btnBg: '#ea9a4c',
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
