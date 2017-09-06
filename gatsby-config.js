module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    header: {
      bg: '#0082C3',
      btnText: '예약하기',
    },
    hero: {
      backgroundImage: '',
      contentLoc: 'left',
      contentPx: [1, 3, 4, 4],
      title: {
        titleText: 'RUN.\nFLY.\nLOOK.\nFEEL.',
        titleSizes: ['7em'],
        titleColor: 'white',
        titleBold: 'bold',
        titleMys: [8],
        titlePbs: [10],
      },
      description: {
        descriptionText:
          '하늘에서 인터라켄을 본적 있으신가요?\n아이거, 융프라우의 장엄한 풍경을 감상해보세요.\n맑은 수정 같은 호수의 경치를 하늘에서 보는 감동.\n당신의 상상이 이뤄집니다!',
        descriptionSizes: [2, 2, 3, 3],
        descriptionColor: 'white',
        descriptionBold: 'thin',
        descriptionMys: [3],
        descriptionPbs: [3],
      },
    },
    intro: {
      contentPx: [1, 3, 4, 4],
      title: {
        titleText: 'SKYWINGS PARAGLIDING',
        titleSizes: [6],
        titleColor: '#ea9a4c',
        titleBold: 'normal',
        titleMys: [6],
        titlePbs: [0],
      },
      description: {
        descriptionText:
          '스카이윙즈의 모든 파일럿들은 SHPA(스위스 행글라이딩, 패러글라이딩 협회)에서 공식적으로 검증 받았으며 고난이도의 훈련을 통과하였습니다. 신뢰와 안전, 그리고 실시간 한국어 예약서비스까지. 스카이윙즈는 최고의 고객서비스를 선사합니다 !\n \n담당 파일럿이 본인 하네스에 카메라를 부착해드립니다. 휴대폰과 대형 카메라는 비행 중 탈락 시 대형 사고의 위험이 있어 휴대가 금지됩니다. 위 물품들을 이륙장소에 가지고 오시는 경우, 비행동안 안전하게 보관해드립니다. 선택 사항으로 HD퀄리티의 사진과 동영상 서비스를 제공합니다. 여러분의 환상적인 추억을 USB에 담아드립니다.',
        descriptionSizes: [2],
        descriptionColor: '#8e8e8e',
        descriptionBold: 'normal',
        descriptionMys: [3],
        descriptionPbs: [3],
      },
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
