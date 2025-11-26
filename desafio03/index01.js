//SRP - Single Responsibility Principle SOLID
class UserValidator {
    validate(user) {
        if (!user.name || !user.email) {
            return false;
        }
        return true;
    }
}

class UserRepository {
    save(user) {
        console.log('Usuário salvo:', user);
    }
}

const user = { name: 'João', email: 'joao@email.com' };
const validator = new UserValidator();
const repo = new UserRepository();

if (validator.validate(user)) {
    repo.save(user);
} else {
    console.log('Dados inválidos');
}