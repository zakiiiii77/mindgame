const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Platform,
		C3.Behaviors.scrollto,
		C3.Plugins.TiledBg,
		C3.Behaviors.solid,
		C3.Behaviors.Turret,
		C3.Behaviors.Rotate,
		C3.Plugins.Keyboard,
		C3.Behaviors.Sin,
		C3.Behaviors.Orbit,
		C3.Plugins.Text,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Sprite.Acts.SetHeight,
		C3.Plugins.Sprite.Acts.SetWidth,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.Sprite.Cnds.CompareY,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Sprite.Cnds.CompareX,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{Platform: 0},
	{ScrollTo: 0},
	{Player: 0},
	{Solid: 0},
	{TiledBackground: 0},
	{Turret: 0},
	{Rotate: 0},
	{Tomato: 0},
	{Keyboard: 0},
	{TiledBackground2: 0},
	{TiledBackground3: 0},
	{TiledBackground4: 0},
	{book: 0},
	{Sprite: 0},
	{Sine: 0},
	{Sprite2: 0},
	{Orbit: 0},
	{Sprite3: 0},
	{Text: 0},
	{Text2: 0},
	{TiledBackground6: 0},
	{TiledBackground5: 0},
	{Sprite4: 0}
];

self.InstanceType = {
	Player: class extends self.ISpriteInstance {},
	TiledBackground: class extends self.ITiledBackgroundInstance {},
	Tomato: class extends self.ISpriteInstance {},
	Keyboard: class extends self.IInstance {},
	TiledBackground2: class extends self.ITiledBackgroundInstance {},
	TiledBackground3: class extends self.ITiledBackgroundInstance {},
	TiledBackground4: class extends self.ITiledBackgroundInstance {},
	book: class extends self.ISpriteInstance {},
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Text: class extends self.ITextInstance {},
	Text2: class extends self.ITextInstance {},
	TiledBackground6: class extends self.ITiledBackgroundInstance {},
	TiledBackground5: class extends self.ITiledBackgroundInstance {},
	Sprite4: class extends self.ISpriteInstance {}
}