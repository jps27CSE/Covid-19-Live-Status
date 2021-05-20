const todaycase = document.getElementById('t-case')
const todaycase_d = document.getElementById('t-case-d')
const total_tests = document.getElementById('total_tests')
const total_cases = document.getElementById('total_cases')
const active_cases = document.getElementById('active_cases')
const critical = document.getElementById('critical')
const test_per_one_million = document.getElementById('test_per_one_million')
const cases_per_one_million = document.getElementById('cases_per_one_million')
const deaths_per_one_million = document.getElementById('deaths_per_one_million')
const total_tests_w = document.getElementById('total_tests_w')
const total_deaths = document.getElementById('total_deaths')
const recovered = document.getElementById('recovered')

function bd() {

    axios.get('https://coronavirus-19-api.herokuapp.com/countries/bangladesh')
        .then(function (response) {
            // handle success
            // console.log(response.data)
            todaycase.innerHTML = `Cases in last 24 hours: ${response.data.todayCases}`
            todaycase_d.innerHTML = `Deaths in last 24 hours: ${response.data.todayDeaths}`
            total_tests.innerHTML = `${response.data.totalTests}`
            total_cases.innerHTML = `${response.data.cases}`
            active_cases.innerHTML = `${response.data.active}`
            critical.innerHTML = `${response.data.critical}`
            test_per_one_million.innerHTML = `${response.data.testsPerOneMillion}`
            cases_per_one_million.innerHTML = `${response.data.casesPerOneMillion}`
            deaths_per_one_million.innerHTML = `${response.data.deathsPerOneMillion}`
            total_deaths.innerHTML = `${response.data.deaths}`
            recovered.innerHTML = `${response.data.recovered}`
        })

    setTimeout(bd, 20000);

}

const c_case_w = document.getElementById('c_case_w')
const t_case_d_w = document.getElementById('t_case_d_w')
const r_case_w = document.getElementById('r_case_w')

function world() {
    axios.get('https://coronavirus-19-api.herokuapp.com/countries/world')
        .then(function (response) {
            // handle success
            // console.log(response.data)
            c_case_w.innerHTML = `Coronavirus Cases : ${response.data.cases}`
            t_case_d_w.innerHTML = `Deaths : ${response.data.deaths}`
            r_case_w.innerHTML = `Recovered : ${response.data.recovered}`
        })

    setTimeout(world, 20000);
}

bd()
world()

