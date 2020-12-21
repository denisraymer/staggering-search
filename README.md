<!-- PROJECT LOGO -->
<p align="center">
    <a href="https://denisraymer.github.io/staggering-search">
      <img src="https://raw.githubusercontent.com/denisraymer/staggering-search/3219d2e7ce954646ce282e76bf540d13746022b2/src/assets/images/logo.svg" alt="Logo" width="350">
    </a>

  <p align="center">
    We check the work with the GitHub API on our own skin
    <br />
    <br />
    <a href="https://denisraymer.github.io/staggering-search/">View Demo</a>
    ·
    <a href="https://github.com/denisraymer/staggering-search/issues">Report Bug</a>
    ·
    <a href="https://github.com/denisraymer/staggering-search/issues">Request Feature</a>
  </p>

</p>

## О проекте

Это приложение со списком пользователей, полученных из GitHub REST API. В проекте реализован поиск по имени, логину и
местоположению. Добавлены дополнительные данные, такие как: подписчики, подписки, биография, ссылка на блог, почта и
твиттер.

### Использовал

* [GitHub REST API](https://docs.github.com/en/free-pro-team@latest/rest)
* [React Bootstrap](https://react-bootstrap.github.io/)
* [React Hooks](https://ru.reactjs.org/docs/hooks-intro.html)
* [gh-pages](https://github.com/tschaub/gh-pages)
* [React](https://ru.reactjs.org/)
* [Rodal](https://github.com/chenjiahan/rodal)
* [Axios](https://github.com/axios/axios)

## Про код

Проект поделил на компоненты список пользователей, форма поиска пользователей, модальное окно для других данных. Для
получения списка пользователей и создания подходящего массива с данными использую хук `useGetUserData`, для поиска
использую хук `useSearchForm`. Все компоненты связал общим контекстом `ListUsersContext`, который поставляет данные в
дочерние компоненты.

### Хук useGetUserData

Сначала хук получает данные из API со списком пользователей с логинами, на основе которых получает данные каждого из них
и формирует новый массив со списком всех необходимых пользователей. Это сделано потому, что API не предоставляет
подробные данные о профиле пользователя; их можно получить только по отдельному запросу.

* Получение списка логинов пользователей
    ```
    useEffect(function () {
        getUsers('users', setResponse, setError);
    }, []);
    ```

* Получение пользователей по логину и добавления в новый массив
    ```
    useEffect(function () {
        if (isLoading && response !== null) {
            function getUser(data) {
                return setUserData(prevState => [...prevState, data]);
            }

            response.map(item => getUsers(`users/${item.login}`, getUser, setError));

            setIsLoading(false);
        }
    }, [isLoading, response]);
    ```

### Компонент ListUsersContext

Здесь организована связка формы поиска и списка пользователей. Здесь выполняется фильтрация введенных данных и создание
необходимого массива с данными, который передается в дочерние компоненты.

* Проведение выборки из массива с данными
  ```
    function validate(user, value) {
        return user.toLowerCase().includes(value.toLowerCase().trim());
    }

    function searchUsers(userData) {
        return userData.filter((user) => {
            if (user.login !== null && user.name !== null && user.location !== null) {
                return validate(user.login, inputValueSearch) || validate(user.name, inputValueSearch) || validate(user.location, inputValueSearch);
            }
        });
    }
  ```

## Заключение

Здесь основные вещи которые на мой взгляд нуждаются в комментариях.

## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
