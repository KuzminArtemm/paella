const db = {
  posts: [
    {
      person: {
        id: "1",
        firstName: "Alex",
        lastName: "Bloomberg",
        email: "man1@mail.com",
        password: "111111",
      },
      id: "01",
      title: "Post 1",
      avatar:
        "https://yandex-images.clstorage.net/bn9WA6384/bd28f2d5usCW/8r5Q8zZJHW4aIW_C8GIpaZ2LwHLt6JnLhMrdSGF9K6sBvWsjT_fn0hHI3qCms-U7oZzeyQxk2KSCowNjnWqEw9O6lKd3_Oi6q8QvQsAyCLxJutG3Ta1Ib6EKOXjE2MvOcOhblw9H5mZheEhm0fTCKGN_zDtes1l08mZWIgmr8KUQCkEwEdnuHZ6AzyAg4LjfLvrhZAxPS_lSGPhtxAxfuwfa2gZaJIe3Re_ZNiJ3crlwrFxKbvN7p7PmNyIvKFKGIp0zUCCY7K6MUHzQ4VNZbvxJAkU97GrZUXiYXRW_Ldt1myoGGZeE1mf-CNSxt3ELcQyPCfxRSiSiFnSwnAoQ5MCsssLzyv5fjuJ8wgFR2hxdOIJXPW5rGZOJeD3kbJ9JVulJtIvGxJc3DvmmM5aSeuNOPBp8YNhWMdeVUi7rkaRyzyMw0ekfz61i3sBDc_h_3bizFj_NqlrTuhrsdtyP-DYbewbZZzbXFcwq5UPVgSljDI-pfFArpXEVZ0KPyCGmkS4wkYDbve99kk1zkWFLjc4KoET9bEv5UCqrbtRvvhs0OLnmyGcFBafOKfcRhuC40Q7O6Y1y6bSx5sVjXavg9iEeAcNguXwPP6Cs0rNB6e-OCQPUbE5J-xJpez3knQyqBKs5JGhVpfcn_MvHAJeQaPM_TYteY0hloDWE0i1aMNQgzKMRUruP3i-wbaLTYgmeLnoRRxxc-XsRKoqvBgweyhaZSORqZMX05ewLR4FkAOnh33wLzQDLxnHHtoEt-fGH0PyzAPAr3__tgryzgBJZb__5Ufatjbj7UorYrcYNjGlk63rGOofXhZRueoeyd4Dawo9MKV9ha0SQl5bhfAtBJ6OvApKzis5sf0PdkbFCmD-dC3EmX60J2MJryB9VLQ4IJLoKdLiW5WTlLTj2A7fzS0HPrNv-0alnkmVl8f7b4PdzDyLzoMl_HlxSvwBi0itNjdrRRSxsa2iQistvw",
      comments: [
        {
          id: this.id,
          comment: "some comment",
          commentId: "1",
        },
      ],
    },
    {
      person: {
        id: "2",
        firstName: "John",
        lastName: "White",
        email: "man2@mail.com",
        password: "222222",
      },
      id: "02",
      title: "Post 2",
      avatar:
        "https://avatars.mds.yandex.net/i?id=e94c9be8b7320353f6979a5be9239b8701da6778-8750570-images-thumbs&n=13&exp=1",
      comments: [
        {
          id: this.id,
          comment: "some comment",
          commentId: "2",
        },
      ],
    },
    {
      person: {
        id: "3",
        firstName: "Samuel",
        lastName: "Black",
        email: "man3@mail.com",
        password: "333333",
      },
      id: "03",
      title: "Post 3",
      avatar:
        "https://yandex-images.clstorage.net/bn9WA6384/bd28f2d5usCW/8r5Q8zZJHW4aIW_C8GIpaZ2LwHLt6JnLhM9oaPG9fp4BqBsDCqfS8mTNG4V200ArsZzO_Dl03fTHg3NmmNrxlqPalEcXLNhqG7QvQsAyCLxJutG3Ta1Ib6EKOXjE2MvOcOhblw9H5mZheEhm0fTCKGN_zDtes1l08mZWIgmr8KUQCkEwEdnuHZ6AzyAg4LjfLvrhZAxPS_lSGPhtxAxfuwfa2gZaJIe3Re_ZNiJ3crlwrFxKbvN7p7PmNyIvKFKGIp0zUCCY7K6MUHzQ4VNZbvxJAkU97GrZUXiYXRW_Ldt1myoGGZeE1mf-CNSxt3ELcQyPCfxRSiSiFnSwnAoQ5MCsssLzyv5fjuJ8wgFR2hxdOIJXPW5rGZOJeD3kbJ9JVulJtIvGxJc3DvmmM5aSeuNOPBp8YNhWMdeVUi7rkaRyzyMw0ekfz61i3sBDc_h_3bizFj_NqlrTuhrsdtyP-DYbewbZZzbXFcwq5UPVgSljDI-pfFArpXEVZ0KPyCGmkS4wkYDbve99kk1zkWFLjc4KoET9bEv5UCqrbtRvvhs0OLnmyGcFBafOKfcRhuC40Q7O6Y1y6bSx5sVjXavg9iEeAcNguXwPP6Cs0rNB6e-OCQPUbE5J-xJpez3knQyqBKs5JGhVpfcn_MvHAJeQaPM_TYteY0hloDWE0i1aMNQgzKMRUruP3i-wbaLTYgmeLnoRRxxc-XsRKoqvBgweyhaZSORqZMX05ewLR4FkAOnh33wLzQDLxnHHtoEt-fGH0PyzAPAr3__tgryzgBJZb__5Ufatjbj7UorYrcYNjGlk63rGOofXhZRueoeyd4Dawo9MKV9ha0SQl5bhfAtBJ6OvApKzis5sf0PdkbFCmD-dC3EmX60J2MJryB9VLQ4IJLoKdLiW5WTlLTj2A7fzS0HPrNv-0alnkmVl8f7b4PdzDyLzoMl_HlxSvwBi0itNjdrRRSxsa2iQistvw",
      comments: [
        {
          id: this.id,
          comment: "some comment",
          commentId: "3",
        },
      ],
    },
  ],
};

module.exports = {
  db,
};
