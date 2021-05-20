const input_search = document.getElementById('input_search')
const c_case_s = document.getElementById('c_case_s')
const t_case_d_s = document.getElementById('t_case_d_s')
const r_case_s = document.getElementById('r_case_s')
const header = document.getElementById('header_country')
const total_tests_s = document.getElementById('total_tests_s')
const active_cases_s = document.getElementById('active_cases_s')
const critical_s = document.getElementById('critical_s')
const test_per_one_million_s = document.getElementById('test_per_one_million_s')
const cases_per_one_million_s = document.getElementById('cases_per_one_million_s')
const deaths_per_one_million_s = document.getElementById('deaths_per_one_million_s')



input_search.addEventListener('keyup', function (event) {
    if (event.key = "Enter") {
        const search = input_search.value
        if (input_search.value === '') {


            c_case_s.innerHTML = `Coronavirus Cases : 0`
            t_case_d_s.innerHTML = `Deaths : 0`
            r_case_s.innerHTML = `Recovered : 0`

        }

        else {
            axios.get('https://coronavirus-19-api.herokuapp.com/countries/' + search)
                .then(function (response) {

                    // console.log(response)
                    if (response.data === "Country not found") {
                        header.innerHTML = `COVID-19 in : `
                        c_case_s.innerHTML = `Coronavirus Cases : 0`
                        t_case_d_s.innerHTML = `Deaths : 0`
                        r_case_s.innerHTML = `Recovered : 0`
                        total_tests_s.innerHTML = `0`
                        active_cases_s.innerHTML = `0`
                        critical_s.innerHTML = `0`
                        test_per_one_million_s.innerHTML = `0`
                        cases_per_one_million_s.innerHTML = `0`
                        deaths_per_one_million_s.innerHTML = `0`
                    }


                    else {
                        header.innerHTML = `COVID-19 in : ${response.data.country}`
                        c_case_s.innerHTML = `Coronavirus Cases : ${response.data.cases}`
                        t_case_d_s.innerHTML = `Deaths : ${response.data.deaths}`
                        r_case_s.innerHTML = `Recovered : ${response.data.recovered}`
                        total_tests_s.innerHTML = `${response.data.totalTests}`
                        active_cases_s.innerHTML = `${response.data.active}`
                        critical_s.innerHTML = `${response.data.critical}`
                        test_per_one_million_s.innerHTML = `${response.data.testsPerOneMillion}`
                        cases_per_one_million_s.innerHTML = `${response.data.casesPerOneMillion}`
                        deaths_per_one_million_s.innerHTML = `${response.data.deathsPerOneMillion}`
                    }

                })
        }
    }



})

