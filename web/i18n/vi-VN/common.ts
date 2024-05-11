const translation = {
  api: {
    success: 'Thành công',
    actionSuccess: 'Thành công',
    saved: 'Đã lưu',
    create: 'Tạo',
    remove: 'Xóa',
  },
  operation: {
    create: 'Tạo mới',
    confirm: 'Xác nhận',
    cancel: 'Hủy bỏ',
    clear: 'Xóa',
    save: 'Lưu',
    edit: 'Chỉnh sửa',
    add: 'Thêm',
    added: 'Đã thêm',
    refresh: 'Làm mới',
    reset: 'Đặt lại',
    search: 'Tìm kiếm',
    change: 'Thay đổi',
    remove: 'Xóa',
    send: 'Gửi',
    copy: 'Sao chép',
    lineBreak: 'Ngắt dòng',
    sure: 'Tôi chắc chắn',
    download: 'Tải xuống',
    delete: 'Xóa',
    settings: 'Cài đặt',
    setup: 'Thiết lập',
    getForFree: 'Nhận miễn phí',
    reload: 'Tải lại',
    ok: 'OK',
    log: 'Nhật ký',
    learnMore: 'Tìm hiểu thêm',
    params: 'Tham số',
    duplicate: 'Nhân bản',
    rename: 'Đổi tên',
  },
  placeholder: {
    input: 'Vui lòng nhập',
    select: 'Vui lòng chọn',
  },
  voice: {
    language: {
      zhHans: 'Tiếng Trung',
      enUS: 'Tiếng Anh',
      deDE: 'Tiếng Đức',
      frFR: 'Tiếng Pháp',
      esES: 'Tiếng Tây Ban Nha',
      itIT: 'Tiếng Ý',
      thTH: 'Tiếng Thái',
      idID: 'Tiếng Indonesia',
      jaJP: 'Tiếng Nhật',
      koKR: 'Tiếng Hàn',
      ptBR: 'Tiếng Bồ Đào Nha',
      ruRU: 'Tiếng Nga',
      ukUA: 'Tiếng Ukraina',
      viVN: 'Tiếng Việt',
      plPL: 'Tiếng Ba Lan',
    },
  },
  unit: {
    char: 'ký tự',
  },
  actionMsg: {
    noModification: 'Hiện không có sự thay đổi.',
    modifiedSuccessfully: 'Chỉnh sửa thành công',
    modifiedUnsuccessfully: 'Chỉnh sửa không thành công',
    copySuccessfully: 'Đã sao chép thành công',
    paySucceeded: 'Thanh toán thành công',
    payCancelled: 'Thanh toán đã hủy',
    generatedSuccessfully: 'Tạo thành công',
    generatedUnsuccessfully: 'Tạo không thành công',
  },
  model: {
    params: {
      temperature: 'Nhiệt độ',
      temperatureTip:
        'Kiểm soát sự ngẫu nhiên: Giảm nhiệt độ dẫn đến ít kết quả hoàn thành ngẫu nhiên hơn. Khi nhiệt độ tiến gần về không, mô hình sẽ trở nên xác định và lặp lại.',
      top_p: 'Top P',
      top_pTip:
        'Kiểm soát đa dạng thông qua lấy mẫu nhân nhóm: 0.5 có nghĩa là nửa số tùy chọn có khả năng cao được xem xét.',
      presence_penalty: 'Phạt sự hiện diện',
      presence_penaltyTip:
        'Độ lớn của sự phạt cho các token mới dựa trên việc chúng có xuất hiện trong văn bản cho đến nay hay không.\nTăng khả năng của mô hình để nói về các chủ đề mới.',
      frequency_penalty: 'Phạt tần suất',
      frequency_penaltyTip:
        'Độ lớn của sự phạt cho các token mới dựa trên tần suất hiện tại của chúng trong văn bản cho đến nay.\nGiảm khả năng của mô hình để lặp lại cùng một dòng văn bản.',
      max_tokens: 'Max token',
      max_tokensTip:
        'Sử dụng để giới hạn độ dài tối đa của câu trả lời, theo token. \nGiá trị lớn có thể giới hạn không gian còn lại cho từ khóa khởi đầu, nhật ký trò chuyện và Kiến thức. \nKhuyến nghị đặt giá trị dưới hai phần ba của gpt-4-1106-preview, gpt-4-vision-preview max token (đầu vào 128k đầu ra 4k)',
      maxTokenSettingTip: 'Cài đặt max token của bạn quá cao, có thể hạn chế không gian cho từ khóa, truy vấn và dữ liệu. Xem xét đặt nó dưới 2/3.',
      setToCurrentModelMaxTokenTip: 'Max token được cập nhật đến 80% token tối đa của mô hình hiện tại {{maxToken}}.',
      stop_sequences: 'Chuỗi dừng',
      stop_sequencesTip: 'Lên đến bốn chuỗi nơi API sẽ dừng việc tạo ra các token tiếp theo. Văn bản được trả về sẽ không chứa chuỗi dừng.',
      stop_sequencesPlaceholder: 'Nhập chuỗi và nhấn Tab',
    },
    tone: {
      Creative: 'Sáng tạo',
      Balanced: 'Cân bằng',
      Precise: 'Chính xác',
      Custom: 'Tùy chỉnh',
    },
    addMoreModel: 'Điều chỉnh cài đặt để thêm mô hình',
  },
  menus: {
    status: 'beta',
    explore: 'Khám phá',
    apps: 'Studio',
    plugins: 'Plugins',
    pluginsTips: 'Tích hợp các plugin bên thứ ba hoặc tạo ra các AI-Plugin tương thích với ChatGPT.',
    datasets: 'Kiến thức',
    datasetsTips: 'SẮP RA MẮT: Nhập dữ liệu văn bản của bạn hoặc viết dữ liệu theo thời gian thực thông qua Webhook để cải thiện ngữ cảnh LLM.',
    newApp: 'Ứng dụng mới',
    newDataset: 'Tạo Kiến thức',
    tools: 'Công cụ',
  },
  userProfile: {
    settings: 'Cài đặt',
    workspace: 'Không gian làm việc',
    createWorkspace: 'Tạo Không gian làm việc',
    helpCenter: 'Trung tâm trợ giúp',
    roadmapAndFeedback: 'Phản hồi',
    community: 'Cộng đồng',
    about: 'Về chúng tôi',
    logout: 'Đăng xuất',
  },
  settings: {
    accountGroup: 'ACCOUNT',
    workplaceGroup: 'WORKSPACE',
    account: 'Tài khoản của tôi',
    members: 'Thành viên',
    billing: 'Thanh toán',
    integrations: 'Tích hợp',
    language: 'Ngôn ngữ',
    provider: 'Nhà cung cấp mô hình',
    dataSource: 'Nguồn dữ liệu',
    plugin: 'Plugins',
    apiBasedExtension: 'Mở rộng dựa trên API',
  },
  account: {
    avatar: 'Ảnh đại diện',
    name: 'Tên',
    email: 'Email',
    password: 'Mật khẩu',
    passwordTip: 'Bạn có thể đặt một mật khẩu cố định nếu bạn không muốn sử dụng mã đăng nhập tạm thời',
    setPassword: 'Đặt mật khẩu',
    resetPassword: 'Đặt lại mật khẩu',
    currentPassword: 'Mật khẩu hiện tại',
    newPassword: 'Mật khẩu mới',
    confirmPassword: 'Xác nhận mật khẩu',
    notEqual: 'Hai mật khẩu không giống nhau.',
    langGeniusAccount: 'Tài khoản Dify',
    langGeniusAccountTip: 'Tài khoản Dify của bạn và dữ liệu người dùng liên quan.',
    editName: 'Chỉnh sửa Tên',
    showAppLength: 'Hiển thị {{length}} ứng dụng',
  },
  members: {
    team: 'Nhóm',
    invite: 'Mời',
    name: 'TÊN',
    lastActive: 'HOẠT ĐỘNG GẦN ĐÂY',
    role: 'VAI TRÒ',
    pending: 'Đang chờ...',
    owner: 'Chủ sở hữu',
    admin: 'Quản trị viên',
    adminTip: 'Có thể xây dựng ứng dụng và quản lý cài đặt nhóm',
    normal: 'Bình thường',
    normalTip: 'Chỉ có thể sử dụng ứng dụng, không thể xây dựng ứng dụng',
    inviteTeamMember: 'Mời thành viên nhóm',
    inviteTeamMemberTip: 'Sau khi đăng nhập, họ có thể truy cập trực tiếp vào dữ liệu nhóm của bạn.',
    email: 'Email',
    emailInvalid: 'Định dạng Email không hợp lệ',
    emailPlaceholder: 'Vui lòng nhập email',
    sendInvite: 'Gửi Lời mời',
    invitedAsRole: 'Được mời với vai trò {{role}}',
    invitationSent: 'Lời mời đã được gửi',
    invitationSentTip: 'Lời mời đã được gửi, và họ có thể đăng nhập vào Dify để truy cập vào dữ liệu nhóm của bạn.',
    invitationLink: 'Liên kết Lời mời',
    failedinvitationEmails: 'Dưới đây là danh sách email không gửi được lời mời',
    ok: 'OK',
    removeFromTeam: 'Xóa khỏi nhóm',
    removeFromTeamTip: 'Sẽ xóa quyền truy cập nhóm',
    setAdmin: 'Đặt làm quản trị viên',
    setMember: 'Đặt thành viên bình thường',
    disinvite: 'Hủy lời mời',
    deleteMember: 'Xóa thành viên',
    you: '(Bạn)',
  },
  integrations: {
    connected: 'Đã kết nối',
    google: 'Google',
    googleAccount: 'Đăng nhập bằng tài khoản Google',
    github: 'GitHub',
    githubAccount: 'Đăng nhập bằng tài khoản GitHub',
    connect: 'Kết nối',
  },
  language: {
    displayLanguage: 'Ngôn ngữ hiển thị',
    timezone: 'Múi giờ',
  },
  provider: {
    apiKey: 'Khóa API',
    enterYourKey: 'Nhập khóa API của bạn ở đây',
    invalidKey: 'Khóa API OpenAI không hợp lệ',
    validatedError: 'Xác minh thất bại: ',
    validating: 'Đang xác minh khóa...',
    saveFailed: 'Lưu khóa API thất bại',
    apiKeyExceedBill: 'Khóa API này không có lượng truy vấn khả dụng, vui lòng đọc',
    addKey: 'Thêm Khóa',
    comingSoon: 'Sắp Ra Mắt',
    editKey: 'Chỉnh sửa',
    invalidApiKey: 'Khóa API không hợp lệ',
    azure: {
      apiBase: 'Cơ sở API',
      apiBasePlaceholder: 'URL cơ sở API của điểm cuối Azure OpenAI của bạn.',
      apiKey: 'Khóa API',
      apiKeyPlaceholder: 'Nhập khóa API của bạn ở đây',
      helpTip: 'Tìm hiểu Dịch vụ Azure OpenAI',
    },
    openaiHosted: {
      openaiHosted: 'OpenAI đang lưu trữ',
      onTrial: 'TRIÊN DÙNG THỬ',
      exhausted: 'HẾT QUOTA',
      desc: 'Dịch vụ lưu trữ OpenAI được cung cấp bởi Dify cho phép bạn sử dụng các mô hình như GPT-3.5. Trước khi hết lượng truy vấn dùng thử, bạn cần thiết lập các nhà cung cấp mô hình khác.',
      callTimes: 'Số lần gọi',
      usedUp: 'Quota dùng thử đã hết. Thêm nhà cung cấp Mô hình của riêng bạn.',
      useYourModel: 'Hiện đang sử dụng nhà cung cấp Mô hình của riêng bạn.',
      close: 'Đóng',
    },
    anthropicHosted: {
      anthropicHosted: 'Anthropic Claude',
      onTrial: 'TRIÊN DÙNG THỬ',
      exhausted: 'HẾT QUOTA',
      desc: 'Mô hình mạnh mẽ, vượt trội trong một loạt các nhiệm vụ từ trò chuyện phức tạp và tạo nội dung sáng tạo đến hướng dẫn chi tiết.',
      callTimes: 'Số lần gọi',
      usedUp: 'Quota dùng thử đã hết. Thêm nhà cung cấp Mô hình của riêng bạn.',
      useYourModel: 'Hiện đang sử dụng nhà cung cấp Mô hình của riêng bạn.',
      close: 'Đóng',
    },
    anthropic: {
      using: 'Khả năng nhúng đang sử dụng',
      enableTip: 'Để kích hoạt mô hình Anthrop, bạn cần ràng buộc với Dịch vụ OpenAI hoặc Azure OpenAI trước.',
      notEnabled: 'Chưa được kích hoạt',
      keyFrom: 'Nhận khóa API của bạn từ Anthrop',
    },
    encrypted: {
      front: 'Khóa API của bạn sẽ được mã hóa và lưu trữ bằng',
      back: ' công nghệ.',
    },
  },
  modelProvider: {
    notConfigured: 'Mô hình hệ thống vẫn chưa được cấu hình hoàn toàn và một số chức năng có thể không khả dụng.',
    systemModelSettings: 'Cài đặt Mô hình Hệ thống',
    systemModelSettingsLink: 'Tại sao cần thiết phải thiết lập mô hình hệ thống?',
    selectModel: 'Chọn mô hình của bạn',
    setupModelFirst: 'Vui lòng thiết lập mô hình của bạn trước',
    systemReasoningModel: {
      key: 'Mô hình lập luận hệ thống',
      tip: 'Thiết lập mô hình suy luận mặc định sẽ được sử dụng để tạo ứng dụng, cũng như các tính năng như việc tạo tên cuộc trò chuyện và đề xuất câu hỏi tiếp theo cũng sẽ sử dụng mô hình suy luận mặc định.',
    },
    embeddingModel: {
      key: 'Mô hình nhúng',
      tip: 'Thiết lập mô hình mặc định cho việc xử lý nhúng tài liệu của Kiến thức, cả hai phương tiện truy xuất và nhập của Kiến thức đều sử dụng mô hình nhúng này cho xử lý vector hóa. Chuyển đổi sẽ làm cho kích thước vector giữa Kiến thức được nhập và câu hỏi không nhất quán, dẫn đến việc truy xuất thất bại. Để tránh truy xuất thất bại, vui lòng không chuyển đổi mô hình này tùy ý.',
      required: 'Mô hình nhúng là bắt buộc',
    },
    speechToTextModel: {
      key: 'Mô hình Chuyển đổi Văn bản thành Tiếng nói',
      tip: 'Thiết lập mô hình mặc định cho đầu vào chuyển đổi tiếng nói thành văn bản trong cuộc trò chuyện.',
    },
    ttsModel: {
      key: 'Mô hình Văn bản thành Tiếng nói',
      tip: 'Thiết lập mô hình mặc định cho đầu vào văn bản thành tiếng nói trong cuộc trò chuyện.',
    },
    rerankModel: {
      key: 'Mô hình Sắp xếp lại',
      tip: 'Mô hình sắp xếp lại sẽ sắp xếp lại danh sách tài liệu ứng cử viên dựa trên sự phù hợp ngữ nghĩa với truy vấn của người dùng, cải thiện kết quả của việc xếp hạng ngữ nghĩa',
    },
    quota: 'Hạn mức',
    searchModel: 'Mô hình tìm kiếm',
    noModelFound: 'Không tìm thấy mô hình cho {{model}}',
    models: 'Mô hình',
    showMoreModelProvider: 'Hiển thị thêm nhà cung cấp mô hình',
    selector: {
      tip: 'Mô hình này đã bị xóa. Vui lòng thêm một mô hình hoặc chọn mô hình khác.',
      emptyTip: 'Không có mô hình khả dụng',
      emptySetting: 'Vui lòng vào cài đặt để cấu hình',
      rerankTip: 'Vui lòng thiết lập mô hình sắp xếp lại',
    },
    card: {
      quota: 'QUOTA',
      onTrial: 'Thử nghiệm',
      paid: 'Đã thanh toán',
      quotaExhausted: 'Quota đã hết',
      callTimes: 'Số lần gọi',
      tokens: 'Tokens',
      buyQuota: 'Mua Quota',
      priorityUse: 'Ưu tiên sử dụng',
      removeKey: 'Remove API Key',
      tip: 'Ưu tiên sẽ được trao cho hạn ngạch đã thanh toán. Hạn ngạch dùng thử sẽ được sử dụng sau khi hết hạn ngạch trả phí.',
    },
    item: {
      deleteDesc: 'Các mô hình {{modelName}} đang được sử dụng như là các mô hình lập luận hệ thống. Một số chức năng sẽ không khả dụng sau khi loại bỏ. Vui lòng xác nhận.',
      freeQuota: 'QUYỀN LỢI MIỄN PHÍ',
    },
    addApiKey: 'Thêm khóa API của bạn',
    invalidApiKey: 'Khóa API không hợp lệ',
    encrypted: {
      front: 'Khóa API CỦA BẠN sẽ được mã hóa và lưu trữ bằng',
      back: ' công nghệ.',
    },
    freeQuota: {
      howToEarn: 'Cách kiếm',
    },
    addMoreModelProvider: 'THÊM NHÀ CUNG CẤP MÔ HÌNH',
    addModel: 'Thêm Mô hình',
    modelsNum: '{{num}} Mô hình',
    showModels: 'Hiện Mô hình',
    showModelsNum: 'Hiện {{num}} Mô hình',
    collapse: 'Thu gọn',
    config: 'Cấu hình',
    modelAndParameters: 'Mô hình và Tham số',
    model: 'Mô hình',
    featureSupported: '{{feature}} được hỗ trợ',
    callTimes: 'Số lần gọi',
    credits: 'Tín dụng Tin nhắn',
    buyQuota: 'Mua Quyền lợi',
    getFreeTokens: 'Nhận mã thông báo miễn phí',
    priorityUsing: 'Ưu tiên sử dụng',
    deprecated: 'Đã lỗi thời',
    confirmDelete: 'Xác nhận xóa?',
    quotaTip: 'Số lượng mã thông báo miễn phí còn lại',
    loadPresets: 'Tải Cài đặt trước',
    parameters: 'THAM SỐ',
  },
  dataSource: {
    add: 'Thêm nguồn dữ liệu',
    connect: 'Kết nối',
    notion: {
      title: 'Notion',
      description: 'Sử dụng Notion như một nguồn dữ liệu cho Kiến thức.',
      connectedWorkspace: 'Không gian làm việc đã kết nối',
      addWorkspace: 'Thêm không gian làm việc',
      connected: 'Đã kết nối',
      disconnected: 'Đã ngắt kết nối',
      changeAuthorizedPages: 'Thay đổi trang được ủy quyền',
      pagesAuthorized: 'Các trang được ủy quyền',
      sync: 'Đồng bộ',
      remove: 'Xóa',
      selector: {
        pageSelected: 'Các trang đã chọn',
        searchPages: 'Tìm kiếm trang...',
        noSearchResult: 'Không có kết quả tìm kiếm',
        addPages: 'Thêm trang',
        preview: 'Xem trước',
      },
    },
  },
  plugin: {
    serpapi: {
      apiKey: 'Khóa API',
      apiKeyPlaceholder: 'Nhập khóa API của bạn',
      keyFrom: 'Nhận khóa SerpAPI của bạn từ Trang tài khoản SerpAPI',
    },
  },
  apiBasedExtension: {
    title: 'Các tiện ích API cung cấp quản lý API tập trung, giúp cấu hình dễ dàng sử dụng trên các ứng dụng của Dify.',
    link: 'Tìm hiểu cách phát triển Phần mở rộng API của riêng bạn.',
    linkUrl: 'https://docs.dify.ai/features/extension/api_based_extension',
    add: 'Thêm Phần mở rộng API',
    selector: {
      title: 'Phần mở rộng API',
      placeholder: 'Vui lòng chọn phần mở rộng API',
      manage: 'Quản lý Phần mở rộng API',
    },
    modal: {
      title: 'Thêm Phần mở rộng API',
      editTitle: 'Chỉnh sửa Phần mở rộng API',
      name: {
        title: 'Tên',
        placeholder: 'Vui lòng nhập tên',
      },
      apiEndpoint: {
        title: 'Điểm cuối API',
        placeholder: 'Vui lòng nhập điểm cuối API',
      },
      apiKey: {
        title: 'Khóa API',
        placeholder: 'Vui lòng nhập khóa API',
        lengthError: 'Độ dài khóa API không được nhỏ hơn 5 ký tự',
      },
    },
    type: 'Loại',
  },
  about: {
    changeLog: 'Nhật ký thay đổi',
    updateNow: 'Cập nhật ngay',
    nowAvailable: 'Dify {{version}} hiện đã có sẵn.',
    latestAvailable: 'Dify {{version}} là phiên bản mới nhất hiện có.',
  },
  appMenus: {
    overview: 'Tổng quan',
    promptEng: 'Orchestrate',
    apiAccess: 'Truy cập API',
    logAndAnn: 'Nhật ký & Thông báo',
    logs: 'Nhật ký',
  },
  environment: {
    testing: 'TESTING',
    development: 'DEVELOPMENT',
  },
  appModes: {
    completionApp: 'Ứng dụng Tạo văn bản',
    chatApp: 'Ứng dụng Trò chuyện',
  },
  datasetMenus: {
    documents: 'Tài liệu',
    hitTesting: 'Kiểm tra truy vấn',
    settings: 'Cài đặt',
    emptyTip: 'Kiến thức chưa được liên kết, vui lòng đi đến ứng dụng hoặc plug-in để hoàn thành liên kết.',
    viewDoc: 'Xem tài liệu',
    relatedApp: 'các ứng dụng liên kết',
  },
  voiceInput: {
    speaking: 'Hãy nói...',
    converting: 'Chuyển đổi thành văn bản...',
    notAllow: 'micro không được ủy quyền',
  },
  modelName: {
    'gpt-3.5-turbo': 'GPT-3.5-Turbo',
    'gpt-3.5-turbo-16k': 'GPT-3.5-Turbo-16K',
    'gpt-4': 'GPT-4',
    'gpt-4-32k': 'GPT-4-32K',
    'text-davinci-003': 'Text-Davinci-003',
    'text-embedding-ada-002': 'Text-Embedding-Ada-002',
    'whisper-1': 'Whisper-1',
    'claude-instant-1': 'Claude-Instant',
    'claude-2': 'Claude-2',
  },
  chat: {
    renameConversation: 'Đổi tên Cuộc trò chuyện',
    conversationName: 'Tên cuộc trò chuyện',
    conversationNamePlaceholder: 'Vui lòng nhập tên cuộc trò chuyện',
    conversationNameCanNotEmpty: 'Yêu cầu nhập tên cuộc trò chuyện',
    citation: {
      title: 'THAM KHẢO',
      linkToDataset: 'Liên kết tới Kiến thức',
      characters: 'Ký tự:',
      hitCount: 'Số lượt truy xuất:',
      vectorHash: 'Vector hash:',
      hitScore: 'Điểm truy xuất:',
    },
  },
  promptEditor: {
    placeholder: 'Viết từ khóa của bạn ở đây, nhập \'{\' để chèn một biến, nhập \'/\' để chèn một khối nội dung nhắc nhở',
    context: {
      item: {
        title: 'Bối cảnh',
        desc: 'Chèn mẫu bối cảnh',
      },
      modal: {
        title: '{{num}} Kiến thức trong Bối cảnh',
        add: 'Thêm Bối cảnh',
        footer: 'Bạn có thể quản lý các bối cảnh trong phần Bối cảnh bên dưới.',
      },
    },
    history: {
      item: {
        title: 'Lịch sử Cuộc trò chuyện',
        desc: 'Chèn mẫu tin nhắn lịch sử',
      },
      modal: {
        title: 'VÍ DỤ',
        user: 'Xin chào',
        assistant: 'Xin chào! Tôi có thể giúp gì cho bạn hôm nay?',
        edit: 'Chỉnh sửa Tên Vai trò Cuộc trò chuyện',
      },
    },
    variable: {
      item: {
        title: 'Biến & Công cụ Bên ngoài',
        desc: 'Chèn Biến & Công cụ Bên ngoài',
      },
      outputToolDisabledItem: {
        title: 'Công cụ Bên ngoài',
        desc: 'Công cụ Bên ngoài không thể chèn vào đây',
      },
      modal: {
        add: 'Biến mới',
        addTool: 'Công cụ mới',
      },
    },
    query: {
      item: {
        title: 'Truy vấn',
        desc: 'Chèn mẫu truy vấn người dùng',
      },
    },
    existed: 'Đã tồn tại trong tin nhắn',
  },
  imageUploader: {
    uploadFromComputer: 'Tải lên từ Máy tính',
    uploadFromComputerReadError: 'Đọc ảnh thất bại, vui lòng thử lại.',
    uploadFromComputerUploadError: 'Tải ảnh lên thất bại, vui lòng tải lên lại.',
    uploadFromComputerLimit: 'Ảnh tải lên không được vượt quá {{size}} MB',
    pasteImageLink: 'Dán liên kết ảnh',
    pasteImageLinkInputPlaceholder: 'Dán liên kết ảnh ở đây',
    pasteImageLinkInvalid: 'Liên kết ảnh không hợp lệ',
    imageUpload: 'Tải ảnh lên',
  },
  tag: {
    placeholder: 'Tất cả các thẻ',
    addNew: 'Thêm thẻ mới',
    noTag: 'Không có thẻ',
    noTagYet: 'Chưa có thẻ',
    addTag: 'thêm thẻ',
    editTag: 'Chỉnh sửa thẻ',
    manageTags: 'Quản lý thẻ',
    selectorPlaceholder: 'Nhập để tìm kiếm hoặc tạo',
    create: 'Tạo',
    delete: 'Xóa thẻ',
    deleteTip: 'Thẻ đang được sử dụng, xóa nó đi?',
    created: 'Thẻ được tạo thành công',
    failed: 'Tạo thẻ không thành công',
  },
}

export default translation
