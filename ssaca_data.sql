INSERT INTO user (id, password, nickname)
VALUES('ssafy', '1234', '김싸피'),
('kang', '1234', '강준규'),
('jo', '1234', '조연주'),
('oh', '1234', '오건영'),
('choi', '1234', '최은희');

INSERT INTO board (title, writer, content, price)
VALUES('맥북 팔아요', 'oh', '짭북 아닙니다. 네고 불가. 01공-1e3사-567팔', 1500000),
('소니 헤드셋', 'kang', '배터리 완충시 48시간 사용. 쿨거래시 네고 가능.', 300000),
('보드게임 급처', 'jo', '찔러보기 환영', 50000),
('에어팟프로', 'oh', '#이어폰 #무선이어폰 #에어팟 #애플 #갤럭시 #버즈 #에어팟프로 #버즈라이브', 100000),
('갤럭시 S23 울트라', 'ssafy', '사용감 거의 없구요. 배터리 성능도 좋습니다.', 500000);

INSERT INTO wishlist (userId, boardId)
VALUES('choi', 1),
('jo', 1),
('kang', 1),
('ssafy', 1),
( 'oh', 2),
('ssafy', 3),
('ssafy', 4),
( 'oh', 5);

INSERT INTO chatroom (sellerId, userId)
VALUES('oh', 'choi'),
('oh', 'jo'),
('kang', 'oh'),
('jo', 'choi'),
( 'oh', 'kang'),
('ssafy', 'choi');

INSERT INTO chatmessage (roomId, userId, message)
VALUES(1, 'choi', '샤오미 아닌가요?'),
(1, 'oh', '짭북, 샤오미 아닙니다.'),
(1, 'choi', '넴'),
(2, 'jo', '쿨거 네고 가능?'),
(2, 'oh', '차단합니다.'),
(3, 'oh', '노캔 잘되나요'),
(4, 'choi', '뱅도 있나용?'),
(5, 'kang', '갤럭시인가요?'),
(6, 'choi', '45만은 안되나요?');

SELECT * FROM user;

SELECT * FROM board;

SELECT * FROM wishlist;

SELECT * FROM chatroom;

SELECT * FROM chatmessage;