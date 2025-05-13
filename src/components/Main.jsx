import Card from "./Card";
import Column from "./Column";

function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column title="Без статуса">
              <div className="cards">
                <Card
                  color={"_orange"}
                  theme="Web Design"
                  title="Название задачи"
                />

                <Card
                  color={"_green"}
                  theme="Research"
                  title="Название задачи"
                />

                <Card
                  color={"_orange"}
                  theme="Web Design"
                  title="Название задачи"
                />

                <Card
                  color={"_purple"}
                  theme="Copywriting"
                  title="Название задачи"
                />
              </div>
            </Column>

            <Column title="Нужно сделать">
              <div className="cards">
                <Card
                  color={"_green"}
                  theme="Research"
                  title="Название задачи"
                />
              </div>
            </Column>

            <Column title="В работе">
              <div className="cards">
                <Card
                  color={"_green"}
                  theme="Research"
                  title="Название задачи"
                />

                <Card
                  color={"_purple"}
                  theme="Copywriting"
                  title="Название задачи"
                />

                <Card
                  color={"_orange"}
                  theme="Web Design"
                  title="Название задачи"
                />
              </div>
            </Column>

            <Column title="Тестирование">
              <div className="cards">
                <Card
                  color={"_green"}
                  theme="Research"
                  title="Название задачи"
                />
              </div>
            </Column>

            <Column title="Готово">
              <div className="cards">
                <Card
                  color={"_green"}
                  theme="Research"
                  title="Название задачи"
                />
              </div>
            </Column>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
