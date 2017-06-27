import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding-bottom: 1.5rem;
`;

const Heading = styled.h2`
  margin: 0;
  margin-bottom: 0.5rem;
  font-family: 'Philosopher';
  font-size: 24px;
  font-weight: bold;
  color: #3e4247;

  &:last-child {
    margin-top: 0.2rem;
}
`;

const Text = styled.p`
  margin: 0;
  font-family: 'Fira Sans';
  font-size: 1rem;
  color: #3e4247;
  line-height: 1.5625rem;
`;

export default () => (
  <Wrapper>
    <Grid>
      <Row>
        <Col lg={2}>
          <Heading>Описание</Heading>
        </Col>
        <Col lg={10}>
          <Text>
              ВТБ Арена Парк — современный квартал в 10 минутах езды от Кремля.
              Территория разделена на три зоны: жилой район, центральный стадион
              «Динамо» и большой спортивный парк.<br />
            <br />Жилой район — это 13 корпусов: апартаменты, штаб-квартира
              «Динамо», отель «Hyatt Regency Moscow» и четыре современных
              бизнес-центра. На территории — рестораны, спа-комплекс,
              фитнес-центр, химчистка, аптеки, магазины и отделения банков.
              В каждом корпусе работает консьерж и круглосуточная охрана. Для
              жителей оборудованы технические помещения под хранение колясок и
              велосипедов, комнаты для домашних животных и уютные вестибюли с
              мягкими креслами для встреч с друзьями и соседями.<br />
            <br />Сердце ВТБ Арена Парк — стадион. Под одной крышей
              расположились музей, торгово-развлекательный комплекс, подземная
              парковка для гостей и две крупные спортивные арены. Жизнь квартала
              сосредоточена в этой зоне: здесь можно сходить на
              концерт или фестиваль, поболеть за любимую команду и купить новую
              рубашку в торговом комплексе.<br />
            <br />Тихий жилой район от шумного стадиона отделяет Парк
              Физкультуры и Отдыха. Здесь каждый найдет занятие: для детей
              оборудованы игровые зоны, для подростков — спортивные площадки на
              открытом воздухе, для взрослых — велосипедные дорожки
              и зоны отдыха, где можно подышать свежим воздухом во время
              рабочего перерыва.
            </Text>
        </Col>
      </Row>
    </Grid>
  </Wrapper>
  );
