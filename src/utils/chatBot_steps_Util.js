import { botQueries } from "../api"

const query_type = ["Payment", "Account", "Other"]
export const steps = [
    {
        id: "Greet",
        message: "Hello, Welcome in Edumetrix.io",
        trigger: "Ask Name"
    },
    {
        id: "Ask Name",
        message: "Please type your name?",
        trigger: "Waiting user input for name"
    },
    {
        id: "Waiting user input for name",
        user: true,
        trigger: "Asking option for query"
    },
    {
        id: "Asking option for query",
        message: "hi {previousValue} ,please select your query type?",
        trigger: "Select your Query type"
    }, {
        id: "Select your Query type",
        options: [
            {
                value: "Payment",
                label: "Payment",
                trigger: "Enter your Qeery about Payment."
            },
            {
                value: "Account",
                label: "Account",
                trigger: "Enter your Qeery about account."
            },
            {
                value: "Other",
                label: "Other",
                trigger: "Enter your other Query."
            }
        ]
    },
    // about payemt triggers
    {
        id: "Enter your Qeery about Payment.",
        message: "Please tell your query releted to Payment.",
        trigger: "waiting for payment query input"
    },
    {
        id: "waiting for payment query input",
        user: true,
        trigger: (props) => {
            if (queryService(props.value, query_type[0])) {
                return "answer for payment query"
            }

        }
    },
    {
        id: "answer for payment query",
        message: 'Your query - "{previousValue}" is submitted',
        trigger: "payment query done"
    }, {
        id: "payment query done",
        message: 'We will look into it and resolve it 3hrs. Thank you',
        trigger: "Asking option for query"
    },
    // about account
    {
        id: "Enter your Qeery about account.",
        message: "Please tell your query releted to account.",
        trigger: "waiting for account query input"
    },
    {
        id: "waiting for account query input",
        user: true,
        trigger: (props) => {
            if (queryService(props.value, query_type[1])) {
                return "answer for account query"
            }
        }
    },
    {
        id: "answer for account query",
        message: 'Your query - "{previousValue}" is submitted',
        trigger: "account query done"
    }, {
        id: "account query done",
        message: 'We will look into it and resolve it 3hrs. Thank you',
        trigger: "Asking option for query"
    },
    // other
    {
        id: "Enter your other Query.",
        message: "Please tell your any other query if you have?",
        trigger: "waiting for other query input"
    },
    {
        id: "waiting for other query input",
        user: true,
        trigger: (props) => {
            if (queryService(props.value, query_type[2])) {
                return "answer for other query"
            }
        }
    },
    {
        id: "answer for other query",
        message: 'Your query - "{previousValue}" is submitted',
        trigger: "other query done"
    }, {
        id: "other query done",
        message: 'We will look into it and resolve it 3hrs. Thank you',
        trigger: "Asking option for query"
    }
];

async function queryService(value, query_type) {
    let obj = {
        query_type: query_type,
        query_text: value
    }
    const result = botQueries(obj).then((res) => console.log(res.data)).catch((err) => console.log(err))
    return true
}