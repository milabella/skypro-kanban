import { useEffect } from "react";
import Card from "./Card";
import Column from "./Column";
import { useState } from "react";
import Loader from "./Loader";


function Main() {
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <main className="main">
      <div>
        {loading ? (
          <Loader />
        ) : (
          <div className="container">
            <div className="main__block">
              <div className="main__content">
                <Column title="Без статуса">
                  <Card
                    color={'orange'}
                    topic="Web Design"
                    title="Название задачи"
                    date="30.10.23"
                  />

                  <Card
                    color={'green'}
                    topic="Research"
                    title="Название задачи"
                    date="30.10.23"
                  />

                  <Card
                    color={'orange'}
                    topic="Web Design"
                    title="Название задачи"
                    date="30.10.23"
                  />

                  <Card
                    color={'purple'}
                    topic="Copywriting"
                    title="Название задачи"
                    date="30.10.23"
                  />
                </Column>

                <Column title="Нужно сделать">
                  <Card
                    color={'green'}
                    topic="Research"
                    title="Название задачи"
                    date="30.10.23"
                  />
                </Column>

                <Column title="В работе">
                  <Card
                    color={'green'}
                    topic="Research"
                    title="Название задачи"
                    date="30.10.23"
                  />

                  <Card
                    color={'purple'}
                    topic="Copywriting"
                    title="Название задачи"
                    date="30.10.23"
                  />

                  <Card
                    color={'orange'}
                    topic="Web Design"
                    title="Название задачи"
                    date="30.10.23"
                  />
                </Column>

                <Column title="Тестирование">
                  <Card
                    color={'green'}
                    topic="Research"
                    title="Название задачи"
                    date="30.10.23"
                  />
                </Column>

                <Column title="Готово">
                  <Card
                    color={'green'}
                    topic="Research"
                    title="Название задачи"
                    date="30.10.23"
                  />
                </Column>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}


export default Main;
