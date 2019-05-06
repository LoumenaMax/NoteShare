var text1 = "Class ";
var text2 = "Other ";
var schoolList = [];
for (var i = 0; i < 500; i++) {
  if (Math.random() > 0.5) {
    schoolList.push({
      label: text1 + i,
      value: i
    });
  } else {
    schoolList.push({
      label: text2 + i,
      value: i
    });
  }
}

export default {
  example: null,
  registered: {
    registered: false
  },
  userInfo: {
    classes: ["boring", "other"]
  },
  currentSchool: {
    name: "Default School"
  },
  currentClass: {
    notes: [],
    discussion: []
  },
  searchableSchools: schoolList,
  login: false
};
