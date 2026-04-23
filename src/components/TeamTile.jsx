import Card from "./ui/Card.jsx";

export default function TeamTile({ member, variant = "default" }) {
  if (variant === "centered") {
    return (
      <Card className="p-6 md:p-7 flex flex-col items-center text-center gap-4">
        <img
          src={member.photo}
          alt={`${member.name} portrait`}
          className="h-24 w-24 rounded-full object-cover border border-line"
          loading="lazy"
        />
        <div>
          <div className="font-serif text-lg font-semibold leading-tight">{member.name}</div>
          <div className="text-sm text-terraDeep font-medium mt-1">{member.role}</div>
          <p className="text-sm text-inkSoft mt-3 leading-relaxed max-w-xs">{member.bio}</p>
        </div>
      </Card>
    );
  }
  return (
    <Card className="p-6 md:p-7 flex flex-col items-center text-center gap-4 h-full">
      <img
        src={member.photo}
        alt={`${member.name} portrait`}
        className="h-28 w-28 rounded-full object-cover border border-line"
        loading="lazy"
      />
      <div>
        <div className="font-serif text-lg font-semibold leading-tight">{member.name}</div>
        <div className="text-sm text-terraDeep font-medium mt-1">{member.role}</div>
        <p className="text-sm text-inkSoft mt-3 leading-relaxed">{member.bio}</p>
      </div>
    </Card>
  );
}
