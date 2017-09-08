module.exports = {
  siteMetadata: {
    title: 'skywings',

    header: {
      bg: '#0082C3',
      btnText: '예약하기',
      btn: {
        bg: 'primary',
      },
    },

    hero: {
      wrapper: {
        px: [3, 3, 100, 150],
      },
      titleText: 'RUN.\nFLY.\nLOOK.\nFEEL.',
      descriptionText:
        '하늘에서 인터라켄을 본적 있으신가요?\n아이거, 융프라우의 장엄한 풍경을 감상해보세요.\n맑은 수정 같은 호수의 경치를 하늘에서 보는 감동.\n당신의 상상이 이뤄집니다!',
    },

    intro: {
      titleText: 'SKYWINGS PARAGLIDING',
      descriptionText:
        '스카이윙즈의 모든 파일럿들은 SHPA(스위스 행글라이딩, 패러글라이딩 협회)에서 공식적으로 검증 받았으며 고난이도의 훈련을 통과하였습니다. 신뢰와 안전, 그리고 실시간 한국어 예약서비스까지. 스카이윙즈는 최고의 고객서비스를 선사합니다 !\n담당 파일럿이 본인 하네스에 카메라를 부착해드립니다. 휴대폰과 대형 카메라는 비행 중 탈락 시 대형 사고의 위험이 있어 휴대가 금지됩니다. 위 물품들을 이륙장소에 가지고 오시는 경우, 비행동안 안전하게 보관해드립니다. 선택 사항으로 HD퀄리티의 사진과 동영상 서비스를 제공합니다. 여러분의 환상적인 추억을 USB에 담아드립니다.',
    },

    promotion: {
      title: {
        titleSizes: [8],
        titleColor: '#ea9a4c',
        bold: 'normal',
        titlePbs: [1],
      },
      description: {
        descriptionSizes: [2],
        descriptionColor: 'black',
        bold: 'normal',
        descriptionPbs: [1],
      },
      items: [
        {
          image: 'http://via.placeholder.com/400x300',
          titleText: 'RUN\nAND FLY',
          descriptionText:
            '가파르지 않은 경사면을 조금 뛰어 내려가면 글라이더에 공기가 차며 여러분과 파일럿을 가볍게 공중으로 띄워줍니다. 착륙 바로 전, 꼿꼿한 자세를 취하게 되며 곧 부드럽게 발을 디디게 됩니다. 비행이 종료되는 착륙장은 인터라켄의 중앙 잔디 밭 입니다.',
        },
        {
          image: 'http://via.placeholder.com/400x300',
          titleText: 'SAFE\nTHRILLER',
          descriptionText:
            '스카이윙즈의 모든 파일럿들은 SHPA(스위스 행글라이딩, 패러글라이딩 협회)에서 공식적으로 검증 받았으며 고난이도의 훈련을 통과하였습니다. 다년간의 비행 경험을 통한 노하우와 비행스킬로 정평나있습니다. 이는 자사의 안전성과 전문성이 최상위의 평가를 받는 이유입니다.',
        },
      ],
    },

    gallery: {
      images: [
        'https://placekitten.com/g/400/300',
        'https://placekitten.com/g/500/300',
        'https://placekitten.com/g/700/700',
        'https://placekitten.com/g/300/500',
      ],
    },

    theme: {
      breakpoints: [32, 48, 64],
      space: [0, 6, 12, 18, 24, 30, 36, 42, 48, 54, 60],
      fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72, 96],
      weights: [400, 700],
      colors: {
        primary: '#ea9a4c',
        secondary: '#0082C3',
      },
      radius: 4,
      font: '-apple-system, BlinkMacSystemFont, sans-serif',
      monospace: '"SF Mono", "Roboto Mono", Menlo, monospace',
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
