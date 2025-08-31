export default function VillagerCard({
  name,
  gender,
  personality,
  hobby,
  birthday,
  catchphrase,
  favSong,
  photo,
  favQuote,
  species,
}) {
  return (
    <>
      <h1 className="sr-only">주민카드</h1>
      <div className="villager-card flex flex-row gap-5  border-solid rounded-[12px] shadow p-4 bg-[#ECFBF7] w-[336px] h-60">
        <div className="profile-photo">
          <img
            src={photo}
            alt={`${name}의 프로필 사진`}
            className="w-[135px] h-[154px] bg-white"
          />
          <div className="flex flex-col items-center">
            <p className="">{name}</p>
            <p className="text-xs">{favQuote}</p>
          </div>
        </div>
        <div className="inner-left flex flex-col gap-2">
          <p>종: {species}</p>
          <p>성별: {gender} </p>
          <p>성격: {personality}</p>
          <p>취미: {hobby} </p>
          <p>생일: {birthday} </p>
          <p>말버릇: {catchphrase} </p>
          <p aria-label="좋아하는 노래">{favSong} </p>
        </div>
      </div>
    </>
  );
}
