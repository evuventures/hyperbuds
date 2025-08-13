import { 
  AiFillFacebook as Facebook,
  AiFillInstagram as Instagram,
  AiFillTwitterSquare as Twitter,
  AiOutlineEdit as Edit,
  AiOutlineLink as ExternalLink,
  AiFillHeart as Heart,
  AiOutlineShareAlt as Share2,
  AiOutlineMore as MoreHorizontal
} from 'react-icons/ai';
import { Button } from './Button';
import { Badge } from './Badge';
import { Card } from './Card';

const socialLinks = [
  { icon: Facebook, username: 'Amma brooks' },
  { icon: Instagram, username: 'A_brooks' },
  { icon: Twitter, username: 'I.am.Ab' },
  { icon: ExternalLink, username: 'Amma_b' },
];

const niches = [
  'Musician',
  'Acting', 
  'Dancing',
  'Makeup Artist',
  'Gaming',
  'Content Creator'
];

export function ProfileSection() {
  return (
    <div className="flex-1 p-4 lg:p-6 space-y-4 lg:space-y-6">
      {/* Profile Header */}
      <div className="relative">
        <div 
          className="h-32 lg:h-48 w-full rounded-lg bg-cover bg-center"
          style={{
            backgroundImage: 'url(/lovable-uploads/e65f0c55-cd64-4eda-b7bb-73c9a109b800.png)'
          }}
        />
        <div className="absolute -bottom-6 lg:-bottom-8 left-4 lg:left-6">
          <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full border-2 lg:border-4 border-white bg-cover bg-center"
               style={{
                 backgroundImage: 'url(/lovable-uploads/e65f0c55-cd64-4eda-b7bb-73c9a109b800.png)'
               }} />
        </div>
        <Button 
          size="sm" 
          className="absolute top-2 lg:top-4 right-2 lg:right-4 bg-white/20 backdrop-blur-sm text-white border-white/30 h-8 lg:h-9 px-2 lg:px-3"
          variant="outline"
        >
          <Edit className="h-3 w-3 lg:h-4 lg:w-4 mr-1 lg:mr-2" />
          <span className="text-xs lg:text-sm">Edit</span>
        </Button>
      </div>

      {/* Profile Info */}
      <div className="pt-6 lg:pt-8">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-lg lg:text-xl font-semibold">@yourfavgirl</h1>
        </div>
        <p className="text-muted-foreground mb-4 text-sm lg:text-base">Influencer, marketing strategist</p>
        
        {/* Social Links */}
        <div className="flex flex-wrap items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
          {socialLinks.map((social, index) => (
            <div key={index} className="flex items-center space-x-1 lg:space-x-2 text-xs lg:text-sm text-muted-foreground">
              <social.icon className="h-3 w-3 lg:h-4 lg:w-4" />
              <span className="truncate max-w-[80px] lg:max-w-none">{social.username}</span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex justify-center lg:justify-start space-x-6 lg:space-x-8 mb-4 lg:mb-6">
          <div className="text-center">
            <div className="text-lg lg:text-xl font-semibold">12K</div>
            <div className="text-xs lg:text-sm text-muted-foreground">Followers</div>
          </div>
          <div className="text-center">
            <div className="text-lg lg:text-xl font-semibold">24</div>
            <div className="text-xs lg:text-sm text-muted-foreground">Collaborations</div>
          </div>
          <div className="text-center">
            <div className="text-lg lg:text-xl font-semibold">200</div>
            <div className="text-xs lg:text-sm text-muted-foreground">Following</div>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-4 lg:mb-6">
          <h2 className="text-base lg:text-lg font-semibold mb-2">Bio</h2>
          <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed">
            Hendrerit elementum ipsum tincidunt eget vitae quam gravida consectetur urna. Nam diam urna. Nunc Ut gravida ipsum tincidunt hendrerit elementum ipsum tincidunt eget vitae quam gravida consectetur urna. Nam diam urna. Nunc Ut gravida ipsum tincidunt
          </p>
        </div>

        {/* Niche */}
        <div className="mb-4 lg:mb-6">
          <h2 className="text-base lg:text-lg font-semibold mb-3">Niche</h2>
          <div className="flex flex-wrap gap-2">
            {niches.map((niche, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="bg-purple-100 text-purple-700 hover:bg-purple-200 text-xs lg:text-sm px-2 lg:px-3"
              >
                {niche}
              </Badge>
            ))}
          </div>
        </div>

        {/* Recent Collabs */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base lg:text-lg font-semibold">Recent Collabs</h2>
            <Button variant="link" className="text-primary p-0 text-sm">View</Button>
          </div>
          
          <Card className="p-3 lg:p-4">
            <div className="flex flex-col lg:flex-row space-y-3 lg:space-y-0 lg:space-x-4">
              <div className="w-full lg:w-20 h-20 lg:h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex-shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold mb-1 text-sm lg:text-base">Tom & Sam Podcast: The AI Edge in Creator Growth</h3>
                <p className="text-xs lg:text-sm text-muted-foreground mb-3">
                  elementum elementum ex porta dui viverra Lorem felis, placerat in amet, nisl. non, ex. Nam Nam est.
                </p>
                <div className="flex flex-col lg:flex-row lg:items-center space-y-2 lg:space-y-0 lg:space-x-4 mb-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-blue-500" />
                    <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-green-500 -ml-1 lg:-ml-2" />
                    <span className="text-xs lg:text-sm font-medium ml-1">Tom & Mon</span>
                  </div>
                  <span className="text-xs lg:text-sm text-muted-foreground">Podcast | Podcast</span>
                </div>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-2 lg:space-y-0">
                  <div className="flex items-center space-x-3 lg:space-x-4">
                    <div className="flex items-center space-x-1">
                      <div className="w-5 h-5 lg:w-6 lg:h-6 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-medium">
                        12K
                      </div>
                      <span className="text-xs lg:text-sm text-muted-foreground">Viewers</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="h-3 w-3 lg:h-4 lg:w-4 text-red-500 fill-current" />
                      <span className="text-xs lg:text-sm text-muted-foreground">5K</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Share2 className="h-3 w-3 lg:h-4 lg:w-4 text-muted-foreground" />
                      <span className="text-xs lg:text-sm text-muted-foreground">400</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 lg:h-9 lg:w-9 self-end lg:self-auto">
                    <MoreHorizontal className="h-3 w-3 lg:h-4 lg:w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}