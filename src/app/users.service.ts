export class UserData {
    api = "https://dummyjson.com/users";
    users: any[] = [];

    async fetchData(): Promise<any[]> {
        return fetch(this.api)
            .then(res => res.json())
            .then(data => {
                return data.users;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                return [];
            });
    }
    async getData() {
        this.users = await this.fetchData();
        console.log(this.users)
        return this.users
    }
    filterData(field: string, value: string, allUsers: any[]): any[] {
        if (!field || !value) return allUsers;
        if (['firstName', 'lastName', 'age', 'birthDate'].includes(field)) {
            return [...allUsers].sort((a, b) => {
                const aVal = a[field];
                const bVal = b[field];

                if (aVal < bVal) return value === 'asc' || value === 'oldest' ? -1 : 1;
                if (aVal > bVal) return value === 'asc' || value === 'oldest' ? 1 : -1;
                return 0;
            });
        }
        return allUsers.filter(user => user[field]?.toLowerCase?.() === value.toLowerCase());
    }

    searchData(value: string, list: any[]): any[] {
        const search = value.toLowerCase();
        return list.filter(user =>
            user.firstName.toLowerCase().includes(search) ||
            user.lastName.toLowerCase().includes(search) ||
            user.email.toLowerCase().includes(search) ||
            user.username.toLowerCase().includes(search)||
            user.birthDate.includes(search)
        );
    }
}
