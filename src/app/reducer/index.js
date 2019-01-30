export function rootReducer(state = {
  signin: { email: "email@gmail.com", password: "root" },
  post: {
    ghalb: {
      orogh: [{ name: "دکتر علی حقی ", adress: "مركز آموزشي پژوهشي و درماني قائم عج", number: "08436536589" }, { name: "دکتر کاوه قلوزی", adress: "مركز آموزشي پژوهشي و درماني قائم عج", number: "08432236589" }, { name: "دکتر مانیا بیرانوند", adress: "مركز آموزشي پژوهشي و درماني قائم عج", number: "08432238533" }, { name: "دکتر رضا قادری", adress: "بیمارستان امام", number: "08433256489" }],
      jorogh: [{ name: "دکتر سیف الله روحی", adress: "بیمارستان امام", number: "08433256489" }, { name: "دکتر مهناز مردانی", adress: "بیمارستان مصطفی خمینی", number: "08433256489" }, { name: "دکتر فریبا جعفری", adress: "بیمارستان امام", number: "08433256489" }]
    },
    dakhale: {
      noro: [{ name: "دکتر شیرین غلامی", adress: "بیمارستان مصطفی خمینی", number: "08433256489" }, { name: "دکتر علی بختیاری", adress: "بیمارستان مصطفی خمینی", number: "084332563269" }, { name: "دکتر یعقوب باقری", adress: "بیمارستان امام", number: "08433256322" }],
      nfro: [{ name: "دکتر هانیه عسگری", adress: "بیمارستان امام", number: "084332563268" }, { name: "دکتر هومن سیدی", adress: "بیمارستان مصطفی خمینی", number: "084332563271" }, { name: "دکتر مهران یوسف نژاد", adress: "بیمارستان مصطفی خمینی", number: "084332563201" }]
    },
    asab: {
      ravan: [{ name: "دکترمحمد شیری ", adress: "مركز آموزشي پژوهشي و درماني قائم عج", number: "08436536589" }, { name: "دکتر مجید سمیعی", adress: "بیمارستان امام", number: "084332561457" }, { name: "دکتر صفورا حسین پور", adress: "بیمارستان امام", number: "084332567412" }, { name: "دکتر مینا کربلایی", adress: "بیمارستان امابیمارستان مصطفی خمینی", number: "084332563641" }]
    }
  },
  user: [],
  doctor:""
}, action) {
  switch (action.type) {
    case 'User':
      var newSignin = [...state.user, action.text,];
      return {
        user: newSignin,
      };

    //**************Add-Doctor *********************
    case 'Add-gh':
      var newPost = [...state.post.ghalb.orogh, action.text,];
      return {
        post: { ...state.post, ghalb: { ...state.post.ghalb, orogh: newPost } }
      };

    case 'Add-jgh':
      var newPost = [...state.post.ghalb.jorogh, action.text,];
      return {
        post: { ...state.post, ghalb: { ...state.post.ghalb, jorogh: newPost } }
      };

    case 'Add-no':
      var newPost = [...state.post.dakhale.noro, action.text,];
      return {
        post: { ...state.post, dakhale: { ...state.post.dakhale, noro: newPost } }
      };

    case 'Add-nf':
      var newPost = [...state.post.dakhale.nfro, action.text,];
      return {
        post: { ...state.post, dakhale: { ...state.post.dakhale, nfro: newPost } }
      };

    case 'Add-ra':
      var newPost = [...state.post.asab.ravan, action.text,];
      return {
        post: { ...state.post, asab: { ...state.post.asab, ravan: newPost } }
      };
    //**************Delete-Doctor *********************

    case 'Delete':
    
      if (action.t === "gh") {
        var newPost = state.post.ghalb.orogh.filter((e, i, a) => i !== parseInt(action.id));
        console.log(newPost)
        return {
          post: { ...state.post, ghalb: { ...state.post.ghalb, orogh: newPost } }
        };
      }
      if (action.t === "jgh") {
        var newPost = state.post.ghalb.jorogh.filter((e, i, a) => i !== parseInt(action.id));
        return {
          post: { ...state.post, ghalb: { ...state.post.ghalb, jorogh: newPost } }
        };
      }
      if (action.t === "no") {
        var newPost = state.post.dakhale.noro.filter((e, i, a) => i !== parseInt(action.id));
        return {
          post: { ...state.post, dakhale: { ...state.post.dakhale, noro: newPost } }
        };
      }
      if (action.t === "nf") {
        var newPost = state.post.dakhale.nfro.filter((e, i, a) => i !== parseInt(action.id));
        return {
          post: { ...state.post, dakhale: { ...state.post.dakhale, nfro: newPost } }
        };
      }
      if (action.t === "ra") {
        var newPost = state.post.asab.ravan.filter((e, i, a) => i !== parseInt(action.id));
        return {
          post: { ...state.post, asab: { ...state.post.asab, ravan: newPost } }
        };
      }
      case "DELETE":
      var newPost = state.user.filter((e, i, a) => i !== parseInt(action.id));
      return {
        user: newPost
      };
    case 'Doctor':
      var Doctor = action.id
      console.log(Doctor);
      return {
        doctor: Doctor
      };

    default:
      return state;
  }
}
//module.exports.rootReducer