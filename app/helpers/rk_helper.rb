module RkHelper
  def happy(number)
    result = []
    lambda = ->(n) { n.split('').reduce(0) { |acc, n| acc += n.to_i } }
    0.upto(number) do |num|
      num = num.to_s
      nuls = 6 - num.length
      nuls.times { num = '0'.concat(num) }
      result.push(num.to_i) if lambda.call(num[0..2]) == lambda.call(num[3..5])
    end
    result
  end
end
