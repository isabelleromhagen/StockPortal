
class Auth {

    login(email, password, callBack){
        if (email && password) {
            fetch("http://localhost:3001/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            })
            .then((response) => response.json())
            .then((data) => {
                if(!data.id_token) {
                    callBack(false, data.message);
                }
                else {
                    localStorage.setItem('id_token', data.id_token);
                    callBack(true, null);
                }
                
            });
        }
    }
    logout() {
        localStorage.removeItem('id_token');
    }
    isAuthenticated(){
        return localStorage.getItem('id_token') != null;
    }
}

export default new Auth();